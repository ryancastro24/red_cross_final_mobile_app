// Define the type for a single module
interface Module {
    id: number;
    title: string;
    topics :{
        id:number,
        topicTitle:string
    }[],
    coverPhoto?:string 
     // Add other properties as needed
  }
export  const modules : Module[] = [

    {id:1, 
        title:'Introduction', topics: [
        {id:1, topicTitle:"First Aid"},
        {id:2, topicTitle:"Basic Life Support"},
        {id:3, topicTitle:"Health HAzards and Risk"},
    ],

    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

    

    },

    {id:2, title:'Emergency Action Principles', topics: [
        {id:1, topicTitle:"Scene Size-Up"},
        {id:2, topicTitle:"Primary Assessment"},
        {id:3, topicTitle:"Secondary Assessment"},
    ],
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

    
},

    {id:3, title:'Cardiac Emergencies', topics: [
        {id:1, topicTitle:"Chain of Survival"},
        {id:2, topicTitle:"Heart Attack"},
        {id:3, topicTitle:"Cardiac Arrest"},
    ],
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

    
},

    {id:4, title:'Air ways and Breathing Emergencies', topics: [
        {id:1, topicTitle:"Foreign-body Airway Obstructions"},
        {id:2, topicTitle:"Respiratory Arrest"},
        {id:3, topicTitle:"Hyperventilation"},
    ],
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

    
},

    {id:5, title:'Bleeding and Shock', topics: [
        {id:1, topicTitle:"Bleeding"},
        {id:2, topicTitle:"Shock"},
    ],
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

    
},

    {id:6, title:'Soft Tissues Injuries', topics: [
        {id:1, topicTitle:"Closed Wound"},
        {id:2, topicTitle:"Open Wound"},
        {id:3, topicTitle:"Burns"},
        {id:4, topicTitle:"Bandaging"},
    ],
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

    
},

    {id:7, title:'Poisoning', topics: [
        {id:1, topicTitle:"Inserted Poison"},
        {id:2, topicTitle:"Inhaled Poison"},
        {id:3, topicTitle:"injected Poison"},
        {id:4, topicTitle:"Absorbed Poison"}
    ],
    
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

},

    {id:8, title:'Head and Spine Injuries', topics: [
        {id:1, topicTitle:"Types"},
    ],
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

},

    {id:9, title:'Bones, Joints and Muscle Injuries', topics: [
        {id:1, topicTitle:"Types"},
    ],
    
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

},
    {id:10, title:'Medical Emergencies', topics: [
        {id:1, topicTitle:"Stroke"},
        {id:2, topicTitle:"Diabetic Emergencies"},
        {id:3, topicTitle:"Seizures"},
        {id:4, topicTitle:"Anaphylaxis"},
        {id:5, topicTitle:"Fainting"},
    ],
    
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

},
    {id:11, title:'Environmental Emergencies', topics: [
        {id:1, topicTitle:"Health-related Emergencies"},
        {id:2, topicTitle:"Cold-related Emergency"},
     
    ],
    
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

},

    {id:12, title:'Special Situations', topics: [
        {id:1, topicTitle:"Emergency Preparedness"},
        {id:2, topicTitle:"Emergency Childbirth"},
        {id:3, topicTitle:"Aquatic Emergencies"},
     
    ],
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

},
    {id:13, title:'Lifting and Moving', topics: [
        {id:1, topicTitle:"Emergency Move"},
        {id:2, topicTitle:"Non-Emergency Move"},     
    ],
    
    coverPhoto:"../../assets/images/undraw_fatherhood_7i19.png"

},

    {id:14, title:'Philppine Red Cross Services', topics: [  
    ]},

    {id:15, title:'7 Fundamental Principles of the Red Cross & Red Cresent Movement', topics: [  
    ]},
    

];