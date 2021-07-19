




//////////////////////////////////// DATA FOR GRID/////////////////////////////////////

$(function () { 
    var people =
   [{ name: "John Doe", doctor: "10", time:"9:00 am", date: "04/21/21", id:"1"},
    { name: "Jane Doe", doctor: "22", time:"10:00 am", date: "05/1/21", id:"2"},
    { name: "Jake Doe", doctor: "31", time:"9:30 am", date: "04/23/21", id:"3"},
    { name: "Jordan Doe", doctor: "32", time:"8:00 am", date: "05/5/21", id:"4"},
    { name: "Justin Doe", doctor: "52", time:"8:30 am", date: "04/24/21", id:"5"},
    { name: "Jill Doe", doctor: "14", time:"9:30 am", date: "04/27/21", id:"6"},
    { name: "John Doe", doctor: "10", time:"11:00 am", date: "04/25/21", id:"7"},
    { name: "Jane Doe", doctor: "22", time:"9:30 am", date: "04/28/21", id:"8"},
    { name: "Jake Doe", doctor: "31", time:"10:30 am", date: "04/27/21", id:"9"},
    { name: "Jordan Doe", doctor: "32", time:"9:00 am", date: "04/28/21", id:"10"},
    { name: "Justin Doe", doctor: "52", time:"9:00 am", date: "04/30/21", id:"11"},
    { name: "Jill Doe", doctor: "14", time:"11:00 am", date: "05/1/21", id:"12"},
    { name: "John Doe", doctor: "10", time:"8:00 am", date: "05/11/21", id:"13"},
    { name: "Jane Doe", doctor: "22", time:"9:00 am", date: "04/24/21", id:"14"},
    { name: "Jake Doe", doctor: "31", time:"11:00 am", date: "04/21/21", id:"15"},
    { name: "Jordan Doe", doctor: "32", time:"7:30 am", date: "04/21/21", id:"16"},
    { name: "Justin Doe", doctor: "52", time:"9:00 am", date: "04/21/21", id:"17"},
    { name: "Jill Doe", doctor: "14", time:"9:00 am", date: "04/21/21", id:"18"},
    { name: "John Doe", doctor: "10", time:"7:00 am", date: "04/21/21", id:"19"},
    { name: "Jane Doe", doctor: "22", time:"9:00 am", date: "04/21/21", id:"20"},
    { name: "Jake Doe", doctor: "31", time:"10:00 am", date: "04/21/21", id:"21"},
    { name: "Jordan Doe", doctor: "32", time:"8:00 am", date: "04/21/21", id:"21"},
    { name: "Justin Doe", doctor: "52", time:"11:00 am", date: "04/21/21", id:"22"},
    { name: "Jill Doe", doctor: "14", time:"9:00 am", date: "04/21/21", id:"23"}
]
var people2 = 
[{ id:"1", firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", city: "Washington, D.C", primaryInsurance:"Blue Cross", secondaryInsurance:"None" },
{ id:"2",  firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", city: "Silver Spring, MD", primaryInsurance:"Blue Cross", secondaryInsurance:"None"  },
{ id:"3", firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", city: "Mclean, VA", primaryInsurance:"United Healthcare", secondaryInsurance:"None" },
{ id:"4", firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", city: "Washington, D.C", primaryInsurance:"Kaiser Permenente", secondaryInsurance:"None" },
{ id:"5", firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", city: "Falls Church, VA", primaryInsurance:"Blue Cross", secondaryInsurance:"None" },
{ id:"6", firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", city: "Arlington, VA", primaryInsurance:"Blue Cross", secondaryInsurance:"None" },
{ id:"7",  firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "No", city: "Washington, D.C", primaryInsurance:"Blue Cross", secondaryInsurance:"None"  },
{ id:"8", firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", city: "Washington, D.C", primaryInsurance:"Blue Cross", secondaryInsurance:"None" },
{ id:"9", firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", city: "Bethesda, MD", primaryInsurance:"Blue Cross", secondaryInsurance:"None" },
{ id:"10", firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", city: "Silver Spring, MD", primaryInsurance:"Blue Cross", secondaryInsurance:"None" }]
 
var people3 = 
    [{ id:"1", date:"05/4/2021", weight: "150lbs", height: "5'11", temperature:"97.1", bloodPressure:"145/78", pulse: 68 },
    { id:"2", date:"05/4/2021", weight: "160lbs", height: "5'10", temperature:"98.1", bloodPressure:"146/78", pulse: 78  },
    { id:"3", date:"05/4/2021", weight: "170lbs", height: "5'9", temperature:"99.1", bloodPressure:"144/78", pulse: 66  },
    { id:"4", date:"05/4/2021", weight: "180lbs", height: "5'8", temperature:"98.1", bloodPressure:"143/78", pulse: 64  },
    { id:"5", date:"05/4/2021", weight: "190lbs", height: "5'7", temperature:"96.1", bloodPressure:"142/78", pulse: 61  }]

 var people4 = 
[{id: 1, doctorName:"Dr. Who"},
{id: 2, doctorName:"Dr. John"},
{id: 3, doctorName:"Dr. Jane"},
{id: 4, doctorName:"Dr.Who"},
{id: 5, doctorName:"Dr.Who"},
{id: 6, doctorName:"Dr.Who"},
{id: 7, doctorName:"Dr.Who"},
{id: 8, doctorName:"Dr.Who"},
{id: 9, doctorName:"Dr.Who"},
{id: 10, doctorName:"Dr.Who"}]   

var specialty =
[{id: 1, specialty:"Audiology"},
{id: 2, specialty:"Ear, Nose, Throat"},
{id: 3, specialty:"Cardiology"},
{id: 4, specialty:"Neurology"},
{id: 5, specialty:"Internal Medicine"},
{id: 6, specialty:"Orthopedic Surgeon"},
{id: 7, specialty:"Pediatrics"},
{id: 8, specialty:"Cardiology"},
{id: 9, specialty:"Neurology"},
{id: 10, specialty:"Audiology"}]   

var medication =
[{id: 1, medicationName:"Crestor", type: "Cholesterol"},
{id: 2, medicationName:"Liptor", type: "Cholesterol" },
{id: 3, medicationName:"Zocor", type: "Cholesterol"},
{id: 4, medicationName:"Amoxicillin", type: "Antibiotic" },
{id: 5, medicationName:"Tetracycline", type: "Antibiotic" },
{id: 6, medicationName:"Prozac", type: "Antidepressant"},
{id: 7, medicationName:"Lexapro", type: "Antidepressant" },
{id: 8, medicationName:"Paxil", type: "Antidepressant" },
{id: 9, medicationName:"Vicodin", type: "Pain" },
{id: 10, medicationName:"Percocet", type: "Pain" }]


///////////////////////////      GRID  ///////////////////////////////////////////////////
    

 
    $("#grid99").kendoGrid({
        toolbar: ["excel","pdf"],
        excel: {
            fileName: "Kendo UI Grid Export.xlsx",
            proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
            filterable: true
        },
        pdf: {
            allPages: true,
            avoidLinks: true,
            paperSize: "A4",
            margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
            landscape: true,
            repeatHeaders: true,
            template: $("#page-template").html(),
            scale: 0.8
        },
        dataSource: {
            data: people,
            schema: {
                model: {
                    fields: {
                        name: { type: "string", validation:{required: true} },
                        doctor: { type: "string", validation:{required: true} },
                        time: { type: "string", validation:{required: true} },
                        date: { type: "string", validation:{required: true} },
                        identification: { type: "string", validation:{required: true} }
                    }
                }
            },
            pageSize: 10
        },
        scrollable: true,
        sortable: true,
        filterable: true,
        pageable: {
            input: true,
            numeric: false
        },
        
        columns: [
            { field: "name", title: "Name", format: "{0:c}", width: "130px" },
            { field: "doctor", title: "Doctor", format: "{0:c}", width: "130px"},
            { field: "time", title: "Time", width: "130px" },
            { field: "date", title: "Date", width: "130px" },
            { field: "identification", title: "ID", width: "130px"}, 
            { command: ["edit", "destroy"], title: "&nbsp;", width: "150px" }
        ],
        editable: "inline"
    });





    $("#grid").kendoGrid({
        toolbar: ["excel", "pdf",{name: "create"}, {name: "save"},{name: "cancel"}],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
            // search: {
            //     fields: ["name", "doctor", "time", "id", "date"]
            // },
        columns: [
       
        { template: "<a class='k-button gridButton'>Appointment Detail</a>", width: 160},            
        { title: "ID", field: "id"},
        { title: "Date", field:"date" },
        { title: "Time", field:"time" },
        { title: "Patient", field: "name"},
        { title: "Doctor", field: "doctor" } ], 
        filterable: true,
            editable: true,
    dataSource: {
        data: people,
        pageSize: 10
    },
    height: 600,
    scrollable: true,
    pageable: true,
    filterable: {
        mode: "row"
    },
    sortable: {
        mode: "multiple"
    },
    groupable: true
    }); 



/////////////////////////////////// NAV TREE /////////////////////////////////////////////////////////////

$(document).ready(function() {
    $("#treeView").kendoTreeView();
});  




//////////////////////////////////////// APPOINTMENT SEARCH FORM////////////////////////////////////////////

// $(document).ready(function () {
//     var validationSuccess = $("#validation-success");

//     $("#exampleform").kendoForm({
//         orientation: "horizontal",
//         formData: {
//             Id: "",
//             Patient: Number,
//             Doctor: Number,
//             Time: "Time",
//             Date: new Date(),
//             Agree: false
//         },
//         height: 500 ,
//         items: [{
//             type: "group",
//             label: "Filters",
//             items: [
//                 {field: "Id", editor: "NumericTextBox", label: "ID:",validation: { required: true } },
//                 { field: "Patient", editor: "NumericTextBox", label: "Patient:", validation: { required: true} },
//                 { field: "Doctor", editor: "NumericTextBox", label: "Doctor:", validation: { required: true} },
//                 { field: "Time", label: "Time:", validation: { required: true} },
//                 { field: "Date", editor: "DatePicker", label: "Date:", validation: { required: true} },
//                 { field: "Reason", label: "Reason:", validation: { required: true} },
//             ]   
//         }],
//         validateField: function(e) {
//             validationSuccess.html("");
//         },
//         search: function(e) {
//             e.preventDefault();
//             validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
//         },
//         clear: function(ev) {
//             validationSuccess.html("");
//         }
//     });
// });

// ////////////////////////////////////////////////////// APPOINTMENT DETAIL FORM //////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform2").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "John Doe",
            Patient: Number,
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        }, 
        items: [{
            type: "group",
            label: "Appointment Detail",
            items: [
                {field: "Id", editor: "NumericTextBox", label: "ID:",validation: { required: true } },
                { field: "Patient", editor: "NumericTextBox", label: "Patient:", validation: { required: true} },
                { field: "Doctor", editor: "NumericTextBox", label: "Doctor:", validation: { required: true} },
                { field: "Time", label: "Time:", validation: { required: true} },
                { field: "Date", editor: "DatePicker", label: "Date:", validation: { required: true} },
                { field: "Reason", label: "Reason:", validation: { required: true} },
            ]   
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});


/////////////////////////////////////////////// Patient Seach Form //////////////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform3").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "",
            FirstName: "",
            LastName: "",
            Birth: new Date(),
            ActivePatient: "",
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        }, 
        layout:"grid",
        grid:{ cols:2, gutter: 20 },
        items: [{
            type: "group",
            label: "Patient Search",
            items: [
                {field: "Id", label: "ID:",validation: { required: true } },
                { field: "FirstName", label: "First Name", validation: { required: true} },
                { field: "LastName", label: "Last Name", validation: { required: true} },
                { field: "ActivePatient",label: "Active Patient?", validation: { required: true} 
            }
        ] 
    } ,
    {
            type: "group",         
            layout: "grid",
            grid: { cols:2, gutter: 20 },
         items: [  
                { field: "Time", editor: "TimePicker", label: "Time", validation: { required: true} },
                { field: "Reason", label: "Reason", validation: { required: true} },
                { field: "PrimaryInsurance", label: "Primary Insurance", validation: { required: true} },
                { field: "SecondaryInsurance", label: "Secondary Insurance", validation: { required: true} }]
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});

//////////////////////////////////////////////////////////// PATIENT DETAIL FORM ///////////////////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform4").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "",
            FirstName: "",
            LastName: "",
            Birth: new Date(),
            ActivePatient: "",
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        }, 
        layout:"grid",
        grid:{ cols:2, gutter: 20 },
        items: [{
            type: "group",
            label: "Patient Detail",
            items: [
                {field: "ActivePatient", label: "Active Patient?", validation: { required: true } },
                {field: "Birth", label: "Date of Birth *", validation: { required: true } },
                { field: "FirstName", label: "First Name *", validation: { required: true} },
                { field: "LastName", label: "Last Name *", validation: { required: true} }, 
                {field: "Adress", label: "Street Address *", validation: { required: true } },
                {field: "Apartment", label: "Apartment *", validation: { required: true } },
                {field: "City", label: "City *", validation: { required: true } },
                {field: "Zip", label: "Zip Code *", validation: { required: true } },
                {field: "PrimaryInsurance", label: "Primary Insurance *", validation: { required: true } },
                {field: "PrimaryInsuranceNumber", label: "Primary Insurance  ID Number *", validation: { required: true } },
                {field: "PrimaryInsuranceHolder", label: "Primary Insurance Holder *", validation: { required: true } },

             
        ] 
    } ,
    {
            type: "group",         
            layout: "grid",
            grid: { cols:2, gutter: 20 },
         items: [  
                { field: "SocialSecurity", label: "Social Security Number", validation: { required: true} },
                {field: "MiddleName", label: "Middle Name", validation: { required: true } },
                {field: "Suffix", label: "Suffix", validation: { required: true } },
                {field: "State", label: "State", validation: { required: true } },
                { field: "SecondaryInsurance", label: "Secondary Insurance", validation: { required: true} },
                { field: "SecondaryInsuranceID", label: "Secondary Insurance ID Number", validation: { required: true} },
                { field: "SecondaryInsuranceHolder", label: "Secondary Insurance Holder", validation: { required: true} }
            ]
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });


//////////////////////////////////  ADMINISTRATION FORM ///////////////////////////////////////////////////////

    $("#exampleform5").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "",
            Patient: Number,
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        },
        items: [{
            type: "group",
            label: "Filters",
            items: [
                {field: "Id", editor: "NumericTextBox", label: "ID:",validation: { required: true } },
                { field: "Doctor", editor: "NumericTextBox", label: "Doctor:", validation: { required: true} }   
            ]   
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
    
    $("#exampleform6").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "",
            doctorName: ""
        },
        items: [{
            type: "group",
            label: "Filters",
            items: [
                {field: "Id", editor: "NumericTextBox", label: "ID:",validation: { required: true } },
                { field: "doctorName", label: "Doctor Name:", validation: { required: true} },
                { field: "openedBy", label: "Opened By", validation: {required: true} },
                { field: "openedOn", editor: "DatePicker", label: "Opened On", validation: {required: true} },
                { field: "edtiedBy", label: "Edited By", validation: {required: true} },
                { field: "editedOn", editor: "DatePicker", label: "Edited On", validation: {required: true} },

            ]   
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});
////////////////////////////////////// Patient Search Grid //////////////////////////////////////
$("#grid2").kendoGrid({
    toolbar: ["excel","pdf", {name: "create"}, {name: "save"},{name: "cancel"}],
    
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
    columns: [
    {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Select</a>", width: 100},    
    { title: "ID", field: "id" },
    { title: "First Name", field:"firstName" },
    { title: "Last Name", field:"lastName" },
    { title: "Active Patient?", field: "active"},
    { title: "Date of Birth", field: "dateOfBirth" },
    { title: "City", field: "city" },
    { title: "Primary Insurance", field: "primaryInsurance" },
    { title: "Secondary Insurance", field: "secondaryInsurance"}
     ],

dataSource: {
    data: people2,
    pageSize: 10
},

scrollable: true,
editable: true,
pageable: true,
filterable: {
    mode: "row"
},
sortable: {
    mode: "multiple"
},
groupable: true
}); 


///////////////////////////////////// PATIENT DETAIL GRID ///////////////////////////////////////////////


///////////////////////// PATIENT VITALS GRID //////////////////////////
$("#grid3").kendoGrid({
    toolbar: ["excel","pdf", {name: "create"}, {name: "save"},{name: "cancel"}],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
    columns: [
    {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Select</a>"},
    { title: "ID", field: "id" },
    { title: "Date", field:"date" },
    { title: "Weight", field:"weight" },
    { title: "Height", field: "height"},
    { title: "Temperature", field: "temperature" },
    { title: "Blood Pressure", field: "bloodPressure" },
    { title: "Pulse", field: "pulse" }
     ],

dataSource: {
    data: people3,
    pageSize: 10
},
height: 600,
scrollable: true,
pageable: true,
editable: true,
filterable: {
    mode: "row"
},
sortable: {
    mode: "multiple"
},
groupable: true
}); 

////////////////////////////  PATIENT TREATMENTS TAB //////////////////////////
$("#grid4").kendoGrid({
    toolbar: ["excel","pdf",  {name: "create"}, {name: "save"},{name: "cancel"}],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
    columns: [
    {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Select</a>"},
    { title: "ID", field: "id" },
    { title: "Date", field:"date" },
    { title: "Treatment", field:"treatment" },
    { title: "Opened By", field: "openedBy"},
    { title: "Opened On", field: "openedOn" },
    { title: "Edited By", field: "editedBy" },
    { title: "Edited On", field: "editedOn" }
     ],

dataSource: {
    data: people3,
    pageSize: 10
},
height: 600,
scrollable: true,
editable: true,
filterable:
{
    mode: 'row'
},
pageable: true,
sortable: {
    mode: "multiple"
},
groupable: true
}); 

////////////////////////////////// PATIENT REFERRALS TAB //////////////////////////////

$("#grid5").kendoGrid({
    toolbar: ["excel","pdf",  {name: "create"}, {name: "save"},{name: "cancel"}],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
    columns: [
    {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Select</a>"},
    { title: "ID", field: "id" },
    { title: "Referral Date", field:"referralDate" },
    { title: "Doctor", field:"doctor" },
    { title: "Referral Doctor", field: "referralDoctor"},
    { title: "Procedure", field: "procedure" },
    { title: "Location", field: "location" },
    { title: "Opened By", field: "openedBy" },
    { title: "Opened On", field: "openedOn" },
    { title: "Edited By", field: "editedBy" },
    { title: "Edited On", field: "editedOn" }
     ],

dataSource: {
    data: people3,
    pageSize: 10
},
height: 600,
scrollable: true,
editable: true,
filterable: {
    mode: "row"
},
pageable: true,
sortable: {
    mode: "multiple"
},
groupable: true
}); 

/////////////////// DOCTOR SEARCH GRID ///////////////////////////////
$("#grid6").kendoGrid({
    toolbar: ["excel","pdf",{name: "create"}, {name: "save"},{name: "cancel"}],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
        
    columns: [
    {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Select</a>"},
    { title: "ID", field: "id" },
    { title: "Doctor Name", field:"doctorName"}
     ],

dataSource: {
    data: people4,
    pageSize: 10
},
height: 500,
editable: true,
scrollable: true,
pageable: true,
filterable: {
    mode: "row"
},
sortable: {
    mode: "multiple"
},
groupable: true
}); 

$("#grid7").kendoGrid({
    toolbar: ["excel","pdf", {name: "create"}, {name: "save"}, {name:" cancel"}],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
        
    columns: [
    // {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Edit</a>"},
    // {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Delete</a>"},
    { title: "ID", field: "id" },
    { title: "Patient", field: "patient" },
    { title: "Doctor", field:"doctorName"},
    { title: "Opened By", field: "openedBy" },
    { title: "Opened On", field: "openedOn" },
    { title: "Edited By", field: "editedBy" },
    { title: "Edited On", field: "editedOn" }
     ],

dataSource: {
    data: people4,
    pageSize: 10
},
height: 500,
editable: true,
filterable: {
    mode: "row"},
scrollable: true,
pageable: true,
sortable: {
    mode: "multiple"
},
groupable: true
}); 

$("#grid8").kendoGrid({
    toolbar: ["excel","pdf",  {name: "create"}, {name: "save"}, {name:" cancel"}],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
        
    columns: [
    // {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Edit</a>"},
    // {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Delete</a>"},
    { title: "ID", field: "id" },
    { title: "Doctor", field:"doctorName"},
    { title: "Specialty", field:"specialty"},
    { title: "Opened By", field: "openedBy" },
    { title: "Opened On", field: "openedOn" },
    { title: "Edited By", field: "editedBy" },
    { title: "Edited On", field: "editedOn" }
     ],

dataSource: {
    data: people4,
    pageSize: 10
},
height: 500,
editable: true,
filterable:
{
    mode:"row"
},
scrollable: true,
pageable: true,
sortable: {
    mode: "multiple"
},
groupable: true
}); 

$("#grid9").kendoGrid({
    toolbar: ["excel","pdf", {name: "create"}, {name: "save"}, {name:" cancel"}],


            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
        
    columns: [
    {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Edit</a>"},
    {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Delete</a>"},
    { title: "ID", field: "id" },
    { title: "Specialty", field:"specialty"},
    { title: "Opened By", field: "openedBy" },
    { title: "Opened On", field: "openedOn" },
    { title: "Edited By", field: "editedBy" },
    { title: "Edited On", field: "editedOn" }
     ],

dataSource: {
    data: specialty,
    pageSize: 10
},
height: 500,
scrollable: true,
pageable: true,
editable: true,
filterable:
{
    mode: "row"
},
sortable: {
    mode: "multiple"
},
groupable: true
}); 

$("#grid10").kendoGrid({
    toolbar: ["excel","pdf",{name: "create"}, {name: "save"}, {name:" cancel"}],
          
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
        
    columns: [
    {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Edit</a>"},
    {  template: "<a class='k-button' href='https://demos.telerik.com/kendo-ui/grid'>Delete</a>"},
    { title: "ID", field: "id" },
    { title: "Medication Name", field:"medicationName"},
    { title: "Type", field: "type" },
    { title: "Opened By", field: "openedBy" },
    { title: "Opened On", field: "openedOn" },
    { title: "Edited By", field: "editedBy" },
    { title: "Edited On", field: "editedOn" }
     ],

dataSource: {
    data: medication,
    pageSize: 10
},
height: 500,
editable: true,
filterable: {mode: "row"},
scrollable: true,
pageable: true,
sortable: {
    mode: "multiple"
},
groupable: true
}); 
});

$(document).ready(function() {
    $("#tabstrip").kendoTabStrip({
        animation:  {
            open: {
                effects: "fadeIn"
            }
        }
    });
});

$(document).ready(function() {
    $("#grid98").kendoGrid({
        dataSource: {
            transport: {
                read: "http://localhost:3000/posts",
                dataType: "jsonp"
            },
            schema: {
                model: {
                    fields: {
                        name: { type: "string", validation:{required: true} },
                        doctor: { type: "string" },
                        time: { type: "string" },
                        date: { type: "string" },
                        identification: { type: "string" }
                    }
                }
            },
            pageSize: 5
        },
        scrollable: true,
        sortable: true,
        filterable: true,
        pageable: {
            input: true,
            numeric: false
        },
        toolbar: ["create"],
        columns: [
            { field: "name", title: "Name", format: "{0:c}", width: "130px" },
            { field: "doctor", title: "Doctor", format: "{0:c}", width: "130px"},
            { field: "time", title: "Time", width: "130px" },
            { field: "date", title: "Date", width: "130px" },
            { field: "identification", title: "ID", width: "130px"}, 
            { command: ["edit", "destroy"], title: "&nbsp;", width: "150px" }
        ],
        editable: "inline"
    });
    });

    $(document).ready(function() {
        $("#treeView").kendoTreeView();
    });  
    
    $(document).ready(function() {
        $("#treeView").kendoTreeView();
    });  
    
    $(document).ready(function(){  
        $("#dialog").kendoDialog({
            width: "600px",
            height: "600px",
            title: "Appointment Detail",
            visible: false,
            closable: true,
            modal: true,
            content: "<p>ID: 1<p>" +
             "<p>Patient: John Doe </p>" +
              "<p> Doctor: 10 </p>" +
               "<p>Time: 9:00am </p>" + 
               "<p>Patient ID: 1 </p>" + 
               "<p>Date: 04/21/2021 </p>" + 
               "<p>Reason: Upset Stomach, Nausea, Headache </p>" +
               "<p>Opened By: Dr. Who</p>" +
               "<p>Opened On: 04/02/2021 </p>" +
               "<p>Edited By: N/A </p>" +
               "<p>Edited On: N/A </p>" +
               "<p>Notes: </p>"
             ,
            actions: [
            
                { text: 'OK', primary: true }
            ]
        }).data("kendoDialog");;
    
    $(".gridButton ").click(function(){
        var dialog = $("#dialog").data("kendoDialog");
        dialog.open();
       
    });
    
    });