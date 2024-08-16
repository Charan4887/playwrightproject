const{test,expect}=require('@playwright/test');

test("websitetesting", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

    await page.waitForTimeout(2000);

    await expect(page).toHaveTitle('Demo Web Shop');

   const have = await page.locator("input[value='Search']");
   
   await expect(have).toBeVisible();

   await page.locator("#pollanswers-1").click();

   await page.locator(".ico-register").click();

   await expect(page).toHaveURL("https://demowebshop.tricentis.com/register");

   await expect(page).toHaveTitle("Demo Web Shop. Register");

   await page.locator("#gender-male").click();

   await page.fill("#FirstName","john");
   
   await page.fill("#LastName","allem");
   
   await page.fill("#Email","allem13@gmail.com");
   
   await page.fill("#Password","john@123");
   
   await page.fill("#ConfirmPassword","john@123");

   await page.locator("#register-button").click();

});

test("logintesting", async ({page}) => {
   await page.goto("https://demowebshop.tricentis.com/");

   await page.waitForTimeout(2000);

   await page.locator(".ico-login").click();

   await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");

   await expect(page).toHaveTitle("Demo Web Shop. Login");

   const title=await page.getByText("Welcome, Please Sign In!");

   await expect(title).toBeVisible;

   await page.fill("#Email","allem12@gmail.com");

   await page.fill("#Password","john@123");

   await page.locator("input[value='Log in']").click();

  
});

test("itemsadding", async ({page}) => {
await page.goto("https://demowebshop.tricentis.com/apparel-shoes");

 await page.waitForTimeout(2000);

await page.locator("ul[class='top-menu'] li:nth-child(4) a:nth-child(1)").click();
 
await page.locator('#products-orderby').selectOption({index:1});

await page.locator('#products-pagesize').selectOption({index:0});

await page.locator("a[href='/apparel-shoes?orderby=5&pagesize=4&pagenumber=3']").click();

await page.locator('.button-2.product-box-add-to-cart-button').first().click();

await page.locator('#add-to-cart-button-10').click();


});

