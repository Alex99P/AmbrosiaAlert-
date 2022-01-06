import { v4 as uuid } from "uuid";

let datas = [];

export const getDatas=(req,res)=>{
    res.send(datas);
}

export const createData = (req, res) => {
    const data = req.body;
    console.log(data);
    datas.push({ ...data, id: uuid() });
    res.send("Data Added Successfully");
  };

  export const getData = (req, res) => {
    const data = datas.filter((data) => data.id === req.params.id);
    res.send(data);
  };
  
  export const deleteData = (req, res) => {
    datas = datas.filter((data) => data.id !== req.params.id);
    res.send("Data Deleted Successfully");
  };
  
//   export const updateData = (req, res) => {
//     const user = users.find((user) => user.id === req.params.id);
  
//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.contact = req.body.contact;
  
//     res.send("User Updated Successfully");
//   };
  

