import {Given,Then} from '@badeball/cypress-cucumber-preprocessor'
import { AmazonPage } from '../pages/AmazonPage';
const amazonPage = new AmazonPage()

Given(/^navigate to the amazon website$/, () => {
	amazonPage.getUrl()
});

Then(/^verify amazon logo is present$/, () => {
	amazonPage.verifyLogoPresent()
});
