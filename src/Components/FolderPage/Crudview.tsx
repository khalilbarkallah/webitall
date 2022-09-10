import { CrudIconEnums } from '../../enums/enums';
import { Crud } from '../../types/types';

type CrudViewProps = {
  Cruds?: Crud[];
  onCrud?: any;
};
export const SocialiteView = (props: CrudViewProps) => {
  const { Cruds, onCrud } = props;
  return (
    <div className="social-menu">
      <ul>
        {Cruds?.map((Crud: Crud) => {
          return (
            <li key={Crud.name}>
              <a onClick={() => onCrud(Crud)}>
                <i className={Crud.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SocialiteView.defaultProps = {
  socialites: [
    { name: 'delete', icon: CrudIconEnums.delete },
    { name: 'add', icon: CrudIconEnums.add },
    { name: 'update', icon: CrudIconEnums.update }
  ]
};
