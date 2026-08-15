import ClearCompletedButton from "@/src/components/insights/ClearCompletedButton";
import InsightsCategorySection from "@/src/components/insights/InsightsCategorySection";
import InsightsPrioritySection from "@/src/components/insights/InsightsPrioritySection";
import InsightsStatsSection from "@/src/components/insights/InsightsStatsSection";
import SentryFeedbackButton from "@/src/components/insights/SentryFeedbackButton";
import UserProfile from "@/src/components/insights/UserProfile";
import TabScreenBackground from "@/src/components/TabScreenBackground";
import { ScrollView } from "react-native";

const InsightsScreen = () => {
  return (
    <>
      <ScrollView
        className="flex-1 bg-background py-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, gap: 14 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <TabScreenBackground />

        <UserProfile />
        <InsightsStatsSection />
        <InsightsCategorySection />
        <InsightsPrioritySection />
        <ClearCompletedButton />
      </ScrollView>

      <SentryFeedbackButton />
    </>
  );
};

export default InsightsScreen;