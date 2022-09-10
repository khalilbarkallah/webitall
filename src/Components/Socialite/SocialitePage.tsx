import { Socialite } from "../../types/types"
import { SocialiteView } from "./SocialiteView"

const onSocialite = (socialite:Socialite) => {
     console.log(socialite)
}

export const SocialitePage = () => {
    return (
        <SocialiteView onSocialite={onSocialite}></SocialiteView>
    )
}