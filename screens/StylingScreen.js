import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from "../constants/theme";

const stylingExamples = [
  {
    id: 1,
    title: "Borders",
    borderWidth: 2,
    borderColor: colors.primary,
  },
  {
    id: 2,
    title: "Rounded Corners",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  {
    id: 3,
    title: "Shadow & Elevation",
    ...shadows.md,
  },
  {
    id: 4,
    title: "Colored Background",
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    borderRadius: borderRadius.md,
  },
];

export default function StylingScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="palette" size={32} color={colors.danger} />
        </View>
        <View>
          <Text style={styles.title}>Styling</Text>
          <Text style={styles.subtitle}>
            Borders, shadows, spacing & typography
          </Text>
        </View>
      </View>

      {/* Borders & Shadows */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Borders & Shadows</Text>

        <View style={styles.exampleGrid}>
          {stylingExamples.map((example) => (
            <View key={example.id} style={styles.exampleCard}>
              <View
                style={[
                  styles.exampleBox,
                  {
                    borderWidth: example.borderWidth,
                    borderColor: example.borderColor,
                    borderRadius: example.borderRadius,
                    backgroundColor: example.backgroundColor,
                    ...(!example.borderWidth &&
                      !example.borderColor &&
                      !example.backgroundColor &&
                      shadows.md),
                  },
                ]}
              >
                <Ionicons name="diamond" size={24} color={colors.primary} />
              </View>
              <Text style={styles.exampleLabel}>{example.title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Padding & Margin */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Padding & Margin</Text>

        <View style={styles.spacingDemo}>
          <Text style={[styles.spacingLabel, { marginBottom: spacing.md }]}>
            Padding Inside
          </Text>
          <View
            style={{
              backgroundColor: "rgba(37, 99, 235, 0.1)",
              borderWidth: 2,
              borderColor: colors.primary,
              borderRadius: borderRadius.md,
              padding: spacing.lg,
            }}
          >
            <View
              style={{
                backgroundColor: colors.primary,
                borderRadius: borderRadius.md,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.white, fontWeight: "600" }}>
                Content
              </Text>
            </View>
          </View>

          <Text
            style={[
              styles.spacingLabel,
              { marginTop: spacing.xl, marginBottom: spacing.md },
            ]}
          >
            Margin Outside
          </Text>
          <View
            style={{
              backgroundColor: "rgba(124, 58, 237, 0.05)",
              borderWidth: 2,
              borderColor: colors.secondary,
              borderRadius: borderRadius.md,
              padding: spacing.lg,
              height: 120,
            }}
          >
            <View
              style={{
                backgroundColor: colors.secondary,
                borderRadius: borderRadius.md,
                height: 40,
                marginTop: spacing.lg,
                marginBottom: spacing.lg,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.white, fontWeight: "600" }}>
                16px Margin
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Typography */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Typography Styles</Text>

        <View style={styles.typographyContainer}>
          <Text style={styles.h1Demo}>Heading 1 (28px)</Text>
          <Text style={styles.h2Demo}>Heading 2 (24px)</Text>
          <Text style={styles.h3Demo}>Heading 3 (20px)</Text>
          <Text style={styles.subtitleDemo}>Subtitle (16px, 600)</Text>
          <Text style={styles.bodyDemo}>Body Text (14px regular)</Text>
          <Text style={styles.captionDemo}>Caption (12px small)</Text>
        </View>
      </View>

      {/* Text Styles */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Text Styles</Text>

        <View style={styles.textStylesContainer}>
          <Text style={styles.textBold}>Bold Text</Text>
          <Text style={styles.textItalic}>Italic Text</Text>
          <Text style={styles.textUnderline}>Underlined Text</Text>
          <Text style={styles.textCenter}>Centered Text</Text>
          <Text style={styles.textColored}>Colored Text</Text>
        </View>
      </View>

      {/* Reusable Components */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reusable Style Patterns</Text>

        <View style={styles.componentContainer}>
          {/* Badge */}
          <View style={styles.badgeContainer}>
            <View style={styles.badgeSmall}>
              <Text style={styles.badgeText}>Badge</Text>
            </View>
            <View style={[styles.badgeSmall, styles.badgeSecondary]}>
              <Text style={[styles.badgeText, { color: colors.secondary }]}>
                Secondary
              </Text>
            </View>
          </View>

          {/* Pill Buttons */}
          <View style={styles.pillContainer}>
            <View style={styles.pillButton}>
              <Ionicons
                name="checkmark-circle"
                size={16}
                color={colors.white}
              />
              <Text style={styles.pillText}>Success</Text>
            </View>
            <View style={[styles.pillButton, styles.pillWarning]}>
              <Ionicons name="alert-circle" size={16} color={colors.white} />
              <Text style={styles.pillText}>Warning</Text>
            </View>
          </View>

          {/* Card Variants */}
          <View style={styles.cardVariant}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: borderRadius.full,
                  backgroundColor: colors.success,
                  marginRight: spacing.md,
                }}
              />
              <Text style={styles.variantText}>Info Card Pattern</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Color Palette */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Color Palette</Text>

        <View style={styles.colorGrid}>
          {[
            { name: "Primary", color: colors.primary },
            { name: "Secondary", color: colors.secondary },
            { name: "Success", color: colors.success },
            { name: "Warning", color: colors.warning },
            { name: "Danger", color: colors.danger },
          ].map((item, idx) => (
            <View key={idx} style={styles.colorBox}>
              <View
                style={[
                  styles.colorSwatch,
                  {
                    backgroundColor: item.color,
                  },
                ]}
              />
              <Text style={styles.colorName}>{item.name}</Text>
            </View>
          ))}
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
    backgroundColor: "rgba(239, 68, 68, 0.1)",
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
  cardTitle: {
    ...typography.subtitle,
    color: colors.textDark,
    marginBottom: spacing.lg,
  },
  exampleGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  exampleCard: {
    width: "48%",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  exampleBox: {
    width: "100%",
    height: 100,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  exampleLabel: {
    ...typography.caption,
    color: colors.textDark,
    textAlign: "center",
    fontWeight: "600",
  },
  spacingDemo: {
    marginBottom: spacing.lg,
  },
  spacingLabel: {
    ...typography.subtitle,
    color: colors.textDark,
  },
  typographyContainer: {
    gap: spacing.md,
  },
  h1Demo: {
    ...typography.h1,
    color: colors.textDark,
  },
  h2Demo: {
    ...typography.h2,
    color: colors.textDark,
  },
  h3Demo: {
    ...typography.h3,
    color: colors.textDark,
  },
  subtitleDemo: {
    ...typography.subtitle,
    color: colors.textDark,
  },
  bodyDemo: {
    ...typography.body,
    color: colors.textDark,
  },
  captionDemo: {
    ...typography.caption,
    color: colors.textDark,
  },
  textStylesContainer: {
    gap: spacing.md,
  },
  textBold: {
    ...typography.body,
    fontWeight: "700",
    color: colors.textDark,
  },
  textItalic: {
    ...typography.body,
    fontStyle: "italic",
    color: colors.textDark,
  },
  textUnderline: {
    ...typography.body,
    textDecorationLine: "underline",
    color: colors.textDark,
  },
  textCenter: {
    ...typography.body,
    textAlign: "center",
    color: colors.textDark,
  },
  textColored: {
    ...typography.body,
    color: colors.primary,
    fontWeight: "600",
  },
  componentContainer: {
    gap: spacing.lg,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: spacing.md,
  },
  badgeSmall: {
    backgroundColor: "rgba(37, 99, 235, 0.1)",
    borderColor: colors.primary,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
  },
  badgeSecondary: {
    backgroundColor: "rgba(124, 58, 237, 0.1)",
    borderColor: colors.secondary,
  },
  badgeText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: "600",
  },
  pillContainer: {
    flexDirection: "row",
    gap: spacing.md,
  },
  pillButton: {
    backgroundColor: colors.success,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  pillWarning: {
    backgroundColor: colors.warning,
  },
  pillText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: "600",
  },
  cardVariant: {
    backgroundColor: "rgba(37, 99, 235, 0.05)",
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
    padding: spacing.lg,
  },
  variantText: {
    ...typography.body,
    color: colors.textDark,
    fontWeight: "600",
  },
  colorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  colorBox: {
    width: "30%",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  colorSwatch: {
    width: "100%",
    height: 80,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  colorName: {
    ...typography.caption,
    color: colors.textDark,
    fontWeight: "600",
  },
});
