import { Meteor } from 'meteor/meteor';

import  '../imports/api/users';

Meteor.startup(() => {
    // code to run on server at startup

    //const petSchema = new SimpleSchema({
    //   name: {
    //       type: String,
    //       min: 1,
    //       max:200,
    //       optional: true
    //   },
    //    age:{
    //        type: Number,
    //        min: 0
    //    },
    //    contactNumber:{
    //        type: String,
    //        optional: true,
    //        regEx: SimpleSchema.RegEx.Phone
    //    }
    //});
    //petSchema.validate({
    //   name: 'Mike',
    //    age: 21,
    //    contactNumber: '1234'
    //});

    //const employeeSchema = new SimpleSchema({
    //    name: {
    //        type: String,
    //        min: 1,
    //        max:200,
    //        optional: true
    //    },
    //    hourlyWage:{
    //        type: Number,
    //        min: 0
    //    },
    //    email:{
    //        type: String,
    //        optional: true,
    //        regEx: SimpleSchema.RegEx.Email
    //    }
    //});
    //employeeSchema.validate({
    //    name: 'Mike',
    //    hourlyWage: 21,
    //    email: 'mike@example.com'
    //});
});
