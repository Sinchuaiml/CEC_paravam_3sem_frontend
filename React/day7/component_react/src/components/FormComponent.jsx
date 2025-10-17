import React from 'react'

export default function FormComponent({text,value,arr}) {
  return (
    <div>
        <form action="">
            <input type="text" name="" id="" placeholder="enter ypur name"/>
          </form>
          <h1>{text}</h1>
          <p>{value}</p>
          <input type="number" name="" id="" value={value}/>
    </div>
  );
}
