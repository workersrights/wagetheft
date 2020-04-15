import RightsCategory from '../models/rightsCategory';
import SubRight from '../models/subRight';

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
    new SubRight('sr8', ['c2'], 'Race Discrimmination', 'cat3.png', '✋'),
    new SubRight('sr9', ['c2'], 'Age Discrimmination', 'cat3.png', '✋'),
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