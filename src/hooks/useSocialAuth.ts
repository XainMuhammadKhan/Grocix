import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth=()=>{
    const [loadingStrategy,setLoadingStrategy]=useState<string|null>(null);
    const {startSSOFlow}=useSSO();

    const handleSocialAuth=async(
        strategy:"oauth_google"
        ) =>{
            if (loadingStrategy) return;

            setLoadingStrategy(strategy)

            try {
                const {createdSessionId, setActive} = await startSSOFlow({strategy})

                if (!createdSessionId||!setActive) {
                    Alert.alert("Sign-in incomplete, Sign-in didnot complete. Please try again")
                    return
                }
                await setActive({session:createdSessionId})
                setLoadingStrategy(null)
            } catch (error) {
                console.error("Error during social sign-in:", error);
                Alert.alert("Sign-in failed", "Could not complete sign-in. Please try again.");
                setLoadingStrategy(null);
            }finally{
                setLoadingStrategy(null)
            }
        }
        return{handleSocialAuth, loadingStrategy}
}
export default useSocialAuth