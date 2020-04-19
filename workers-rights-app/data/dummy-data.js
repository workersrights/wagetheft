import RightsCategory from '../models/rightsCategory';
import SubRight from '../models/subRight';
import Event from '../models/event';

export const RIGHTSCATEGORIES = [
    new RightsCategory('c1', 'Getting Hired', require('../images/hiring-icon.png')),
    new RightsCategory('c2', 'Mistreatment', require('../images/mistreatment-icon.png')),
    new RightsCategory('c3', 'Getting Paid', require('../images/payments-icon.png')),
    new RightsCategory('c4', 'Safety & Health', require('../images/health-icon.png')),
    new RightsCategory('c5', 'Unions', require('../images/unions-icon.png')),
    new RightsCategory('c6', 'Unemployment', require('../images/unemployment-icon.png')),
];

export const SUBRIGHTS = [
    new SubRight('sr1', ['c3'], 'Deductions from Pay', 'cat3.png', '💵'),
    new SubRight('sr2', ['c3'], 'Final Paycheck Laws', 'cat3.png', '💵'),
    new SubRight('sr3', ['c3'], 'Meal and Rest Breaks', 'cat3.png', '💵'),
    new SubRight('sr4', ['c3'], 'Overtime Pay', 'cat3.png', '💵'),
    new SubRight('sr5', ['c1'], 'Interview / Application', 'cat3.png', '🔖'),
    new SubRight('sr6', ['c1'], 'Background Checks', 'cat3.png', '🔖'),
    new SubRight('sr7', ['c1'], 'Non-Disclosure Agreements (NDAs)', 'cat3.png', '🔖'),
    new SubRight('sr8', ['c2'], 'Race Discrimination', 'cat3.png', '✋'),
    new SubRight('sr9', ['c2'], 'Age Discrimination', 'cat3.png', '✋'),
    new SubRight('sr10', ['c2'], 'Sexual Harassment', 'cat3.png', '✋'),
    new SubRight('sr11', ['c4'], 'Workplace Safety Protections', 'cat3.png', '⛑'),
    new SubRight('sr12', ['c4'], 'Infectious Diseases in Workplace', 'cat3.png', '⛑'),
    new SubRight('sr13', ['c4'], 'Injured at Work', 'cat3.png', '⛑'),
    new SubRight('sr14', ['c5'], 'Retaliation for Collective Action', 'cat3.png', '👫'),
    new SubRight('sr15', ['c5'], 'Right to Work Laws', 'cat3.png', '👫'),
    new SubRight('sr16', ['c6'], 'Unemployment Insurance Benefits', 'cat3.png', '👩‍💼'),
    new SubRight('sr17', ['c6'], 'Fired For No Reason', 'cat3.png', '👩‍💼'),
    new SubRight('sr18', ['c6'], 'Unemployment Compensation App', 'cat3.png', '👩‍💼'),
];

export const EVENTS = [
    new Event('Know Your Rights Workshop', 'e1', '05/20/2020', 'https://540westmain.files.wordpress.com/2018/01/know.jpg', 'WTC', 'San Jose', 'workshop'),
    new Event('Legal Workshop', 'e2', '06/11/2020', 'https://previews.123rf.com/images/belchonock/belchonock1802/belchonock180286505/96155278-word-law-with-judges-gavel-and-legal-books-on-wooden-background.jpg', 'Stanford Law Clinic', 'Stanford', 'workshop'),
    new Event('PAWIS Potluck', 'e3', '04/29/2020', 'https://i0.wp.com/pawis-sv.com/wp-content/uploads/2014/01/pawis-logo-final.jpg?fit=584%2C438&ssl=1', 'PAWIS', 'San Jose', 'social'),
    new Event('PAWIS Church Meeting', 'e4', '04/29/2020', 'https://i0.wp.com/pawis-sv.com/wp-content/uploads/2014/01/pawis-logo-final.jpg?fit=584%2C438&ssl=1', 'PAWIS', 'San Jose', 'social')
];