import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

export interface Loginuser{
    type:string,
    username:string,
    password:string
}

export function readLogindata(): Loginuser[]{
    const filepath=path.resolve(__dirname,'../testdata/Logindata.csv');
    const filecontent=fs.readFileSync(filepath,'utf-8');

    return parse(filecontent,{
        columns:true,
        skip_empty_lines:true,
        trim:true
    })as Loginuser[];
}