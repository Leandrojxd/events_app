import path from "path";
import fs from 'fs';

function  buildPath(){
    return path.join(process.cwd(),'data','data.json')
}

function extractData(filePath){
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData)// THAT IT IS A JAVASCRIPT OBJECT
    return data;
}

export default function handler (req,res) {
    const {method} = req
    const filePath = buildPath();
    const {events_categories , allEvents} = extractData(filePath)

    if(!allEvents){
        return res.status(404).json({
            status:404,
            message: 'Events data not found'
        })
    }


    if(method === "POST"){
        //wE ADDA something idk
        const {email, eventId} = req.body;

        if(!email | !email.includes('@')){
            res.status(422).json({message:'Invalid email address'})
            return;
        };

        const newAllEvents =allEvents.map(ev => {
            if(ev.id === eventId){
                if(ev.emails_registered.includes(email)){
                    res.status(409).json({message: 'This email has already been registered'})
                }
                return{
                ...ev, emails_registered:[...ev.emails_registered,email]
                }
                return ev;
            }
            return ev;
        });
        //convert BACK to a string xd 
        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))


        res.status(200).json({message: `You has been registered successfully with the email:${email},${eventId}`})
    }
}