import CompletedItems from '@/src/components/list/CompletedItems'
import ListHeroCard from '@/src/components/list/ListHeroCard'
import PendingItemCard from '@/src/components/list/PendingItemCard'
import TabScreenBackground from '@/src/components/TabScreenBackground'
import { useGroceryStore } from '@/src/store/grocery-store'
import { Show, useUser } from '@clerk/expo'
import { UserProfileView } from '@clerk/expo/native'
import { Link } from 'expo-router'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'


export default function ListScreen() {
    const { user } = useUser()
    const { items } = useGroceryStore();
  const pendingItems = items.filter((item) => !item.purchased);

    return (
         <FlatList
      className="flex-1 bg-background "
      data={pendingItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PendingItemCard item={item} />}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      contentInsetAdjustmentBehavior="automatic"
      ListHeaderComponent={
        <View style={{ gap: 14, paddingTop: 20 }}>
          <TabScreenBackground />
          <ListHeroCard />
          <View className="flex-row items-center justify-between px-1">
            <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
              Shopping items
            </Text>
            <Text className="text-sm text-muted-foreground">{pendingItems.length} active</Text>
          </View>
        </View>
      }
      ListFooterComponent={<CompletedItems />}
    />
  );
}
    


// FIRST VERSION WITH ITEMS.MAP
/*
<ScrollView
      className="flex-1 bg-background py-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
    >
      <TabScreenBackground />

      <ListHeroCard />

      <View className="flex-row items-center justify-between px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Shopping items
        </Text>
        <Text className="text-sm text-muted-foreground">{pendingItems.length} active</Text>
      </View>

      {pendingItems.map((item) => (
        <PendingItemCard key={item.id} item={item} />
      ))}

      <CompletedItems />
    </ScrollView>
*/