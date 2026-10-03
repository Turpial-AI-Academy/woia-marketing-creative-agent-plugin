import { readFile } from "node:fs/promises";
const i=process.argv.indexOf("--file"); if(i<0||!process.argv[i+1]) throw new Error("--file is required");
const doc=JSON.parse(await readFile(process.argv[i+1],"utf8"));
const errors=[];
if(!Array.isArray(doc.assets)||doc.assets.length===0) errors.push("assets must be a non-empty array");
for(const [index,a] of (doc.assets??[]).entries()){
  const at="assets["+index+"]";
  for(const key of ["id","purpose","media_type"]) if(typeof a?.[key]!=="string"||!a[key].trim()) errors.push(at+"."+key+" is required");
  if(!a?.provenance||typeof a.provenance!=="object") errors.push(at+".provenance is required");
  if(!Array.isArray(a?.outputs)||a.outputs.length===0||!a.outputs.every(x=>typeof x==="string"&&x.trim())) errors.push(at+".outputs must be a non-empty string array");
}
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",asset_count:Array.isArray(doc.assets)?doc.assets.length:0,errors},null,2));
process.exitCode=errors.length?2:0;
