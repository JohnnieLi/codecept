
Feature('Login');

Scenario('test something', (I) => {
   I.amOnPage("/")
   I.see('Home');
   I.seeElement('img[_ngcontent-c2]');
   I.click("Sign up");
   I.see('Username');
   I.seeCurrentUrlEquals('/register');
   I.click("a[href='/login']");
   I.seeCurrentUrlEquals('/login');
   
});
