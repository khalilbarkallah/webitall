import Button from "../Components/Button/Button";
export const SidebarData = [
	{
		name: 'input',
		icon: 'input icon',
        ConfigContent : (<div className='card-body'>
        <div className="form-group">
        <label >Field Label</label>
        <input type="text" className="form-control" aria-invalid="false"/>         
        </div>
        <div className="form-group">
        <label >Field Name</label>
        <input  type="text"  className="form-control" aria-invalid="false"/>               
        </div>  
        <div className="form-group">
        <label >type</label>
        <select className="form-control " aria-invalid="false">
            <option  value="text">Text</option> 
            <option value="number">Number</option> 
            <option  value="email">Email</option> 
            <option  value="password">Password</option>
             <option value="color">Color</option>
             </select>          
        </div>
        <div className="form-group">
        <label >place holder</label>
        <input  type="text"  className="form-control" aria-invalid="false"/>               
        </div>
    
        <div  className="form-group">
        <label > Validation </label> 
        <select id="" className="form-control " aria-invalid="false">
            <option  value="[object Object]">Email</option>
            <option  value="[object Object]"> URL </option>
            <option  value="[object Object]"> Minlength</option>
            <option  value="[object Object]">Maxlength</option>
            <option  value="[object Object]">Digits</option>
            <option  value="[object Object]"> Number</option>
            <option  value="[object Object]"> Alphanumeric</option>
            <option  value="[object Object]"> Letters Only </option>
            <option  value="[object Object]"> Phone</option>
            <option  value="[object Object]"> Phone US </option>
            <option  value="[object Object]">Credit Card</option>
            </select>
       </div>
        <div className="form-group">
            <label >Error Message For  url</label> 
            <input type="text" className="form-control " placeholder=""/>
        </div>
        <div className="form-group" >
            
            <button className="savebtn" >  Save </button>
            </div>

    </div> ),

	},
	{
	
	},
	{
		
	},
	{
		
	},
	{
	
	},
];
