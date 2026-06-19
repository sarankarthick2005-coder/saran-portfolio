import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        await page.goto("http://localhost:3000")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Click the 'Experience' link in the top navigation to open the Experience page and verify experience cards and company/role details are visible.
        # Experience link
        elem = page.get_by_text('Home', exact=True).locator("xpath=ancestor-or-self::*[.//a][1]").get_by_role('link', name='Experience', exact=True)
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> Verify experience cards are displayed
        await page.locator("xpath=/html/body/div[2]/div/main/div/section[2]/div[2]/div[1]/div[2]").nth(0).scroll_into_view_if_needed()
        # Assert: The first experience card is visible on the Experience page.
        await expect(page.locator("xpath=/html/body/div[2]/div/main/div/section[2]/div[2]/div[1]/div[2]").nth(0)).to_be_visible(timeout=15000), "The first experience card is visible on the Experience page."
        await page.locator("xpath=/html/body/div[2]/div/main/div/section[2]/div[2]/div[2]/div[2]").nth(0).scroll_into_view_if_needed()
        # Assert: The second experience card is visible on the Experience page.
        await expect(page.locator("xpath=/html/body/div[2]/div/main/div/section[2]/div[2]/div[2]/div[2]").nth(0)).to_be_visible(timeout=15000), "The second experience card is visible on the Experience page."
        await page.locator("xpath=/html/body/div[2]/div/main/div/section[2]/div[2]/div[3]/div[2]").nth(0).scroll_into_view_if_needed()
        # Assert: The third experience card is visible on the Experience page.
        await expect(page.locator("xpath=/html/body/div[2]/div/main/div/section[2]/div[2]/div[3]/div[2]").nth(0)).to_be_visible(timeout=15000), "The third experience card is visible on the Experience page."
        await page.locator("xpath=/html/body/div[2]/div/main/div/section[2]/div[2]/div[4]/div[2]").nth(0).scroll_into_view_if_needed()
        # Assert: The fourth experience card is visible on the Experience page.
        await expect(page.locator("xpath=/html/body/div[2]/div/main/div/section[2]/div[2]/div[4]/div[2]").nth(0)).to_be_visible(timeout=15000), "The fourth experience card is visible on the Experience page."
        current_url = await page.evaluate("() => window.location.href")
        # Assert: page loaded with a URL (final outcome verified by the AI judge during the run)
        assert current_url, 'Page should have loaded with a URL'
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    