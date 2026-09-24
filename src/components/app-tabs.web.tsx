import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ flex: 1 }} />

      <TabList style={styles.tabList}>
        <TabTrigger name="index" asChild>
          <Pressable style={styles.tab}>
            <Text>Home</Text>
          </Pressable>
        </TabTrigger>

        <TabTrigger name="explore" asChild>
          <Pressable style={styles.tab}>
            <Text>Explore</Text>
          </Pressable>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
  },

  tab: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});