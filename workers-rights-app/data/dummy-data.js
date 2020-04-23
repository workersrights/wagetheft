import RightsCategory from '../models/rightsCategory';
import SubRight from '../models/subRight';
import Organization from '../models/organization';
import Event from '../models/event';

export const RIGHTSCATEGORIES = [
  new RightsCategory(
    "c1",
    "Getting Hired",
    require("../images/hiring-icon.png"),
    "Not getting paid what your employer owes you? Are you not allowed to take sick leaves?",
    "This section addresses the facts on wage and hours as well as your rights when it comes to leaves."
  ),
  new RightsCategory(
    "c2",
    "Mistreatment",
    require("../images/mistreatment-icon.png"),
    "Are you being harrassed or discriminated against at work? Is your employer being unfair or unreasonably disrespectful?",
    "This section addresses your rights to fair treatment, and other topics related to discrimination and general mistreatment."
  ),
  new RightsCategory(
    "c3",
    "Getting Paid",
    require("../images/payments-icon.png"),
    "",
    ""
  ),
  new RightsCategory(
    "c4",
    "Safety & Health",
    require("../images/health-icon.png"),
    "",
    ""
  ),
  new RightsCategory(
    "c5",
    "Unions",
    require("../images/unions-icon.png"),
    "",
    ""
  ),
  new RightsCategory(
    "c6",
    "Unemployment",
    require("../images/unemployment-icon.png"),
    "",
    ""
  ),
];

export const ORGANIZATIONS = [
    new Organization(
      'o1',
      'Wage Theft Coalition',
      require('../images/wage-theft-coalition-logo.png'),
      'TODO description',
      'TODO website link',
      ["c3"]
    ),
    new Organization(
      'o2',
      'OSHA',
      require('../images/osha-logo.png'),
      'TODO description',
      'TODO website link',
      ["c4"]
      ),
    new Organization(
      'o3',
      'NLRB',
      require('../images/NLRB-logo.png'),
      'TODO description',
      'TODO website link',
      ["c6"]
      ),
    new Organization(
      'o4',
      'PERB',
      require('../images/PERB-logo.png'),
      'TODO description',
      'TODO website link',
      ["c6"]
      ),
    new Organization(
      'o5',
      'DFEH',
      require('../images/DFEH-logo.png'),
      'TODO description',
      'TODO website link',
      ["c2"]
      ),
    new Organization(
      'o6',
      'U.S. Commission on Civil Rights',
      require('../images/wage-theft-coalition-logo.png'),
      'The Civil Rights Act of 1957 created the U.S. Commission on Civil Rights. Since then, Congress has reauthorized or extended the legislation creating the Commission several times; the last reauthorization was in 1994 by the Civil Rights Commission Amendments Act of 1994. \n Established as an independent, bipartisan, fact-finding federal agency, our mission is to inform the development of national civil rights policy and enhance enforcement of federal civil rights laws. We pursue this mission by studying alleged deprivations of voting rights and alleged discrimination based on race, color, religion, sex, age, disability, or national origin, or in the administration of justice. We play a vital role in advancing civil rights through objective and comprehensive investigation, research, and analysis on issues of fundamental concern to the federal government and the public.',
      'www.usccr.gov',
      ["c2"]
    ),
    new Organization(
      'o7',
      'EBSA',
      require('../images/wage-theft-coalition-logo.png'),
      'EBSA is committed to educating and assisting over 200 million pension, health and other employee benefit plan participants and beneficiaries and more than 3 million plan sponsors and members of the employee benefit community. EBSA promotes voluntary compliance and facilitates self-regulation, working diligently to provide quality assistance to plan participants and beneficiaries. EBSA\'s goal in providing direct assistance is to raise the knowledge level of plan participants and beneficiaries, service providers and other interested parties and to ensure that they have access to available plan documents filed with the Department of Labor. This enables participants to better understand and exercise their rights under the law and, when possible, to recover any benefits to which they may be entitled.',
      'www.dol.gov/ebsa',
      ["c3"]
    ),
    new Organization(
      'o8',
      'EEOC',
      require('../images/wage-theft-coalition-logo.png'),
      'The U.S. Equal Employment Opportunity Commission (EEOC) is responsible for enforcing federal laws that make it illegal to discriminate against a job applicant or an employee because of the person\'s race, color, religion, sex (including pregnancy, gender identity, and sexual orientation), national origin, age (40 or older), disability or genetic information. It is also illegal to discriminate against a person because the person complained about discrimination, filed a charge of discrimination, or participated in an employment discrimination investigation or lawsuit.',
      'https://eeoc.custhelp.com/app/home',
      ["c2"]
    )
];

export const SUBRIGHTS = [
  new SubRight("w1", ["c3"], "Deductions from Pay", require("../images/payments-icon.png"), "💵"),
  new SubRight("w2", ["c3"], "Final Paycheck Laws", require("../images/payments-icon.png"), "💵"),
  new SubRight("w3", ["c3"], "Meal and Rest Breaks", require("../images/payments-icon.png"), "💵"),
  new SubRight("w4", ["c3"], "Overtime Pay", require("../images/payments-icon.png"), "💵"),
  new SubRight("h1", ["c1"], "Interview / Application", require("../images/hiring-icon.png"), "🔖"),
  new SubRight("h2", ["c1"], "Background Checks", require("../images/hiring-icon.png"), "🔖"),
  new SubRight("h3", ["c1"], "Non-Disclosure Agreements (NDAs)", require("../images/hiring-icon.png"), "🔖"),
  new SubRight("m1", ["c2"], "Race Discrimination", require("../images/mistreatment-icon.png"), "✋"),
  new SubRight("m2", ["c2"], "Age Discrimination", require("../images/mistreatment-icon.png"), "✋"),
  new SubRight("m3", ["c2"], "Sexual Harassment", require("../images/mistreatment-icon.png"), "✋"),
  new SubRight("s1", ["c4"], "Workplace Safety Protections", require("../images/health-icon.png"), "⛑"),
  new SubRight("s2", ["c4"], "Infectious Diseases in Workplace", require("../images/health-icon.png"), "⛑"),
  new SubRight("s3", ["c4"], "Injured at Work", require("../images/health-icon.png"), "⛑"),
  new SubRight("g1", ["c5"], "Retaliation for Collective Action", require("../images/unions-icon.png"), "👫"),
  new SubRight("g2", ["c5"], "Right to Work Laws", require("../images/unions-icon.png"), "👫"),
  new SubRight("u1", ["c6"], "Unemployment Insurance Benefits", require("../images/unemployment-icon.png"), "👩‍💼"),
  new SubRight("u2", ["c6"], "Fired For No Reason", require("../images/unemployment-icon.png"), "👩‍💼"),
  new SubRight("u3", ["c6"], "Unemployment Compensation App", require("../images/unemployment-icon.png"), "👩‍💼"),
];

export const EVENTS = [
  new Event(
    "e1",
    "Know Your Rights Workshop",
    "05/20/2020",
    "https://540westmain.files.wordpress.com/2018/01/know.jpg",
    "WTC",
    "San Jose",
    0,
    "workshop",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
  new Event(
    "e2",
    "Legal Workshop",
    "06/11/2020",
    "https://previews.123rf.com/images/belchonock/belchonock1802/belchonock180286505/96155278-word-law-with-judges-gavel-and-legal-books-on-wooden-background.jpg",
    "Stanford Law Clinic",
    "Stanford",
    0,
    "workshop",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
  new Event(
    "e3",
    "PAWIS Potluck",
    "04/29/2020",
    "https://i0.wp.com/pawis-sv.com/wp-content/uploads/2014/01/pawis-logo-final.jpg?fit=584%2C438&ssl=1",
    "PAWIS",
    "San Jose",
    0,
    "social",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
  new Event(
    "e4",
    "PAWIS Church Meeting",
    "04/29/2020",
    "https://i0.wp.com/pawis-sv.com/wp-content/uploads/2014/01/pawis-logo-final.jpg?fit=584%2C438&ssl=1",
    "PAWIS",
    "San Jose",
    0,
    "social",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
];
