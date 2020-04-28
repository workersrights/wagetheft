import RightsCategory from "../models/rightsCategory";
import SubRight from "../models/subRight";
import Organization from "../models/organization";
import Event from "../models/event";
import LearnMore from "../models/learnMore";

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
    "o1",
    "Wage Theft Coalition",
    require("../images/wage-theft-coalition-logo.png"),
    "TODO description",
    "TODO website link"
  ),
  new Organization(
    "o2",
    "OSHA",
    require("../images/osha-logo.png"),
    "TODO description",
    "TODO website link"
  ),
  new Organization(
    "o3",
    "NLRB",
    require("../images/NLRB-logo.png"),
    "TODO description",
    "TODO website link"
  ),
  new Organization(
    "o4",
    "PERB",
    require("../images/PERB-logo.png"),
    "TODO description",
    "TODO website link"
  ),
  new Organization(
    "o5",
    "DFEH",
    require("../images/DFEH-logo.png"),
    "TODO description",
    "TODO website link"
  ),
];

export const SUBRIGHTS = [
  new SubRight(
    "sr1",
    ["c3"],
    "Deductions from Pay",
    require("../images/payments-icon.png"),
    "💵",
    ["lm1", "lm2", "lm3"]
  ),
  new SubRight(
    "sr2",
    ["c3"],
    "Final Paycheck Laws",
    require("../images/payments-icon.png"),
    "💵",
    ["lm1", "lm2"]
  ),
  new SubRight(
    "sr3",
    ["c3"],
    "Meal and Rest Breaks",
    require("../images/payments-icon.png"),
    "💵",
    []
  ),
  new SubRight(
    "sr4",
    ["c3"],
    "Overtime Pay",
    require("../images/payments-icon.png"),
    "💵",
    []
  ),
  new SubRight(
    "sr5",
    ["c1"],
    "Interview / Application",
    require("../images/hiring-icon.png"),
    "🔖",
    ["lm1", "lm2", "lm3"]
  ),
  new SubRight(
    "sr6",
    ["c1"],
    "Background Checks",
    require("../images/hiring-icon.png"),
    "🔖",
    []
  ),
  new SubRight(
    "sr7",
    ["c1"],
    "Non-Disclosure Agreements (NDAs)",
    require("../images/hiring-icon.png"),
    "🔖",
    []
  ),
  new SubRight(
    "sr8",
    ["c2"],
    "Race Discrimination",
    require("../images/mistreatment-icon.png"),
    "✋",
    []
  ),
  new SubRight(
    "sr9",
    ["c2"],
    "Age Discrimination",
    require("../images/mistreatment-icon.png"),
    "✋",
    []
  ),
  new SubRight(
    "sr10",
    ["c2"],
    "Sexual Harassment",
    require("../images/mistreatment-icon.png"),
    "✋",
    []
  ),
  new SubRight(
    "sr11",
    ["c4"],
    "Workplace Safety Protections",
    require("../images/health-icon.png"),
    "⛑",
    []
  ),
  new SubRight(
    "sr12",
    ["c4"],
    "Infectious Diseases in Workplace",
    require("../images/health-icon.png"),
    "⛑",
    []
  ),
  new SubRight(
    "sr13",
    ["c4"],
    "Injured at Work",
    require("../images/health-icon.png"),
    "⛑",
    []
  ),
  new SubRight(
    "sr14",
    ["c5"],
    "Retaliation for Collective Action",
    require("../images/unions-icon.png"),
    "👫",
    []
  ),
  new SubRight(
    "sr15",
    ["c5"],
    "Right to Work Laws",
    require("../images/unions-icon.png"),
    "👫",
    []
  ),
  new SubRight(
    "sr16",
    ["c6"],
    "Unemployment Insurance Benefits",
    require("../images/unemployment-icon.png"),
    "👩‍💼",
    []
  ),
  new SubRight(
    "sr17",
    ["c6"],
    "Fired For No Reason",
    require("../images/unemployment-icon.png"),
    "👩‍💼",
    []
  ),
  new SubRight(
    "sr18",
    ["c6"],
    "Unemployment Compensation App",
    require("../images/unemployment-icon.png"),
    "👩‍💼",
    []
  ),
];

export const LEARNMORES = [
  new LearnMore(
    "lm1",
    "How much is overtime pay?",
    require("../images/question.png"),
    [
      {
        header: "Introductory Paragraph",
        body:
          "Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor ipsum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh",
      },
      {
        header: "Elaboration Paragraph",
        body: "ipsum ipsum ipsum. Dolor sit amet.",
      },
    ]
  ),
  new LearnMore(
    "lm2",
    "Which federal laws cover deductions?",
    require("../images/question.png"),
    [
      {
        header: "Introductory Paragraph 2",
        body: "Lorem ipsum dolor ipsum lorem 2.",
      },
      {
        header: "Elaboration Paragraph 2",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        header: "Look out!",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        header: "",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ]
  ),
  new LearnMore(
    "lm3",
    "How do I file a complaint?",
    require("../images/question.png"),
    [
      {
        header: "Introductory Paragraph 3",
        body: "Lorem ipsum dolor ipsum lorem 3.",
      },
      {
        header: "Elaboration Paragraph 3",
        body: "ipsum ipsum ipsum. Dolor sit amet 3.",
      },
    ]
  ),
];

export const EVENTS = [
  new Event(
    "e1",
    "Know Your Rights Workshop",
    "05/20/2020",
    "5:00 pm",
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
    "7:00 pm",
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
    "2:00 pm",
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
    "10:00 am",
    "https://i0.wp.com/pawis-sv.com/wp-content/uploads/2014/01/pawis-logo-final.jpg?fit=584%2C438&ssl=1",
    "PAWIS",
    "San Jose",
    0,
    "social",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
];
