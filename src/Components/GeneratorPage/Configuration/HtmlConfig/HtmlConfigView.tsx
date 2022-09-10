
import './HtmlConfigStyle.css';
import { SidebarData } from '../../../../Data/SidebarData';



type HtmlConfigViewProps = {
    aze?: any,
    onElement?:any
}
export const HtmlConfigView = (props: HtmlConfigViewProps) => {
    const { aze, onElement } = props


    return (
      
 <div  className=' card-configuration'>
        <div className="card-header">
         <h2 >html</h2>               
         </div>

         {
                    SidebarData?.map((element : any) => {
                         return <div>{element.ConfigContent}</div>

                    })
                }
    
     </div>

       

    );
}

export default HtmlConfigView;












