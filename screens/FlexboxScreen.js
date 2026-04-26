import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from "../constants/theme";

const flexDemos = [
  {
    id: 1,
    title: "Row Layout",
    description: 'flexDirection: "row"',
    style: { flexDirection: "row" },
    items: 3,
  },
  {
    id: 2,
    title: "Column Layout",
    description: 'flexDirection: "column"',
    style: { flexDirection: "column" },
    items: 3,
  },
  {
    id: 3,
    title: "Space Between",
    description: 'justifyContent: "space-between"',
    style: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    items: 3,
  },
  {
    id: 4,
    title: "Center Content",
    description: 'justifyContent & alignItems: "center"',
    style: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    items: 3,
  },
  {
    id: 5,
    title: "Space Around",
    description: 'justifyContent: "space-around"',
    style: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    items: 3,
  },
  {
    id: 6,
    title: "Flex Grow",
    description: "Items grow to fill space",
    style: { flexDirection: "row" },
    items: 3,
    flexGrow: true,
  },
];

export default function FlexboxScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="git-branch" size={32} color={colors.success} />
        </View>
        <View>
          <Text style={styles.title}>Flexbox Layout</Text>
          <Text style={styles.subtitle}>Master flex properties</Text>
        </View>
      </View>

      {/* Demo Cards */}
      {flexDemos.map((demo) => (
        <View key={demo.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{demo.title}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{demo.id}/6</Text>
            </View>
          </View>
          <Text style={styles.description}>{demo.description}</Text>

          {/* Demo Box */}
          <View style={styles.demoContainer}>
            <View
              style={[
                styles.flexDemo,
                demo.style,
                { minHeight: demo.flexGrow ? 200 : 120 },
              ]}
            >
              {[...Array(demo.items)].map((_, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.flexItem,
                    {
                      flex: demo.flexGrow ? 1 : 0,
                    },
                  ]}
                >
                  <Ionicons name="square" size={24} color={colors.white} />
                  <Text style={styles.itemText}>{idx + 1}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Code Preview */}
          <View style={styles.codeBox}>
            <Text style={styles.codeLabel}>Properties:</Text>
            <Text style={styles.codeLine}>
              flexDirection: "{demo.style.flexDirection || "row"}"
            </Text>
            {demo.style.justifyContent && (
              <Text style={styles.codeLine}>
                justifyContent: "{demo.style.justifyContent}"
              </Text>
            )}
            {demo.style.alignItems && (
              <Text style={styles.codeLine}>
                alignItems: "{demo.style.alignItems}"
              </Text>
            )}
            {demo.flexGrow && (
              <Text style={styles.codeLine}>flex: 1 (for items)</Text>
            )}
          </View>
        </View>
      ))}

      {/* Quick Reference */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Reference</Text>
        <View style={styles.referenceItem}>
          <View style={styles.bullet} />
          <Text style={styles.referenceText}>
            <Text style={{ fontWeight: "600" }}>justifyContent:</Text>{" "}
            Distribute along main axis
          </Text>
        </View>
        <View style={styles.referenceItem}>
          <View style={styles.bullet} />
          <Text style={styles.referenceText}>
            <Text style={{ fontWeight: "600" }}>alignItems:</Text> Align along
            cross axis
          </Text>
        </View>
        <View style={styles.referenceItem}>
          <View style={styles.bullet} />
          <Text style={styles.referenceText}>
            <Text style={{ fontWeight: "600" }}>flexDirection:</Text> row or
            column
          </Text>
        </View>
        <View style={styles.referenceItem}>
          <View style={styles.bullet} />
          <Text style={styles.referenceText}>
            <Text style={{ fontWeight: "600" }}>flex:</Text> Grow/shrink
            proportionally
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
  },
  content: {
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.lg,
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.caption,
    color: colors.textLight,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  cardTitle: {
    ...typography.subtitle,
    color: colors.textDark,
    flex: 1,
  },
  badge: {
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
  },
  badgeText: {
    ...typography.caption,
    color: colors.success,
    fontWeight: "600",
  },
  description: {
    ...typography.body,
    color: colors.textLight,
    marginBottom: spacing.lg,
    fontStyle: "italic",
  },
  demoContainer: {
    marginBottom: spacing.lg,
  },
  flexDemo: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    justifyContent: "flex-start",
  },
  flexItem: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    margin: spacing.sm,
  },
  itemText: {
    ...typography.caption,
    color: colors.white,
    marginTop: spacing.xs,
    fontWeight: "600",
  },
  codeBox: {
    backgroundColor: "#1E293B",
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },
  codeLabel: {
    ...typography.caption,
    color: colors.success,
    marginBottom: spacing.sm,
    fontWeight: "600",
  },
  codeLine: {
    ...typography.body,
    color: "#E2E8F0",
    marginBottom: spacing.xs,
    fontFamily: "monospace",
  },
  referenceItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: spacing.md,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    marginRight: spacing.md,
    marginTop: spacing.xs,
  },
  referenceText: {
    ...typography.body,
    color: colors.textDark,
    flex: 1,
  },
});
