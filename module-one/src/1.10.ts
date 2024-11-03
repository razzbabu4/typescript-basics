{

    // Union and Intersection type

    // union type
    type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper"   // string literals type
    type FullstackDeveloper = "FrontendDeveloper" | "ExpertDeveloper"   // string literals type

    type Developer = FrontendDeveloper | FullstackDeveloper;

    const newDeveloper: Developer = "JuniorDeveloper";

    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: "A+" | "B+" | "O-" | "O+";
    }

    const user1: User = {
        name: "Raz",
        gender: "male",
        bloodGroup: "O+"
    }

    // intersection type
    type FrontEndDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    }

    type BackEndDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    }


    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ["HTML", "CSS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }



}