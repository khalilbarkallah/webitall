
import './SidebarStyle.css';
import { Sidebarelement } from '../../../types/types';


type SidebarViewProps = {
    Elements?:  Sidebarelement[],
    onElement?:any
}
export const SidebarView = (props: SidebarViewProps) => {
    const { Elements, onElement } = props
    return (
     
        <div className='toolbar'>
                     <h2 className='Titlee'> Elements  </h2>
            <ul>
                {
                    Elements?.map((element : Sidebarelement) => {
                         return <li key ={element.name}><button className='btnn'> <span>{element.name}</span></button></li>

                    })
                }
            </ul>
        </div>
       
    )
}

SidebarView.defaultProps = {
    Elements: [
        { name: 'input' },
        { name: 'linked'},
        { name: 'twitter' },
        { name: 'twitter' },

        { name: 'twitter' },

        { name: 'twitter' },

        { name: 'twitter' },
        { name: 'twitter' },
        { name: 'twitter' },
        { name: 'twitter' },
        { name: 'twitter' },
        { name: 'twitter' },

    ]
}


             
    
      
  