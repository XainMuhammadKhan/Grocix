import { Show, useUser } from '@clerk/expo'
import { UserProfileView } from '@clerk/expo/native'
import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'


export default function Page() {
    const { user } = useUser()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>

            <Show when="signed-out">
                <View style={styles.authContainer}>
                    <Link
                        href="/(auth)/sign-in"
                        style={styles.button}
                    >
                        Sign in
                    </Link>


                </View>
            </Show>

            <Show when="signed-in">
                <View style={styles.signedInContainer}>

                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.greeting}>
                            Hello {user?.emailAddresses[0]?.emailAddress}
                        </Text>

                        <View style={styles.actions}>
                        </View>
                    </View>

                    {/* Clerk Profile */}
                    <View style={styles.profileContainer}>
                        <UserProfileView
                            isDismissible={false}
                            style={styles.profile}
                        />
                    </View>

                </View>
            </Show>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 16,
        justifyContent: 'center',
        backgroundColor: '#000',
    },

    title: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff',
    },

    authContainer: {
        gap: 12,
    },

    button: {
        backgroundColor: '#0a7ea4',
        color: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        overflow: 'hidden',
    },

    signedInContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
    },

    header: {
        width: '100%',
        paddingBottom: 16,
        gap: 12,
    },

    greeting: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },

    profileContainer: {
        flex: 1,
        width: '100%',
        overflow: 'hidden',
    },

    profile: {
        flex: 1,
        width: '100%',
    },
})