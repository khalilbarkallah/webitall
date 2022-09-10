import { SocialiteIconEnums } from '../../enums/enums';
import { Socialite } from '../../types/types';

type SocialiteViewProps = {
  socialites?: Socialite[];
  onSocialite?: any;
};
export const SocialiteView = (props: SocialiteViewProps) => {
  const { socialites, onSocialite } = props;
  return (
    <div className="social-menu">
      <ul>
        {socialites?.map((socialite: Socialite) => {
          return (
            <li key={socialite.name}>
              <a onClick={() => onSocialite(socialite)}>
                <i className={socialite.icon}></i>
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
    { name: 'facebook', icon: SocialiteIconEnums.facebook },
    { name: 'linked', icon: SocialiteIconEnums.linkedin },
    { name: 'twitter', icon: SocialiteIconEnums.twitter }
  ]
};
