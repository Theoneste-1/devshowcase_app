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

export default function PositioningScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="location" size={32} color={colors.warning} />
        </View>
        <View>
          <Text style={styles.title}>Positioning</Text>
          <Text style={styles.subtitle}>Absolute vs Relative & zIndex</Text>
        </View>
      </View>

      {/* Relative Positioning */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Relative Positioning</Text>
        <Text style={styles.description}>
          Elements flow in document like normal
        </Text>

        <View style={styles.relativeDemo}>
          <View style={[styles.box, styles.boxBase]}>
            <Text style={styles.boxText}>Static</Text>
          </View>
          <View style={[styles.box, styles.boxBase, styles.relativeOffset]}>
            <Text style={styles.boxText}>Relative</Text>
          </View>
          <View style={[styles.box, styles.boxBase]}>
            <Text style={styles.boxText}>Static</Text>
          </View>
        </View>

        <View style={styles.codeBox}>
          <Text style={styles.codeLine}>position: "relative"</Text>
          <Text style={styles.codeLine}>top: 20, left: 20</Text>
        </View>
      </View>

      {/* Absolute Positioning */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Absolute Positioning</Text>
        <Text style={styles.description}>Removed from document flow</Text>

        <View style={styles.absoluteDemo}>
          <View style={[styles.box, styles.boxBase]}>
            <Text style={styles.boxText}>Position A</Text>
          </View>

          <View
            style={[
              styles.box,
              {
                position: "absolute",
                top: 40,
                right: 20,
                backgroundColor: colors.danger,
              },
            ]}
          >
            <Text style={styles.boxText}>Absolute</Text>
          </View>

          <View style={[styles.box, styles.boxBase]}>
            <Text style={styles.boxText}>Position B</Text>
          </View>
        </View>

        <View style={styles.codeBox}>
          <Text style={styles.codeLine}>position: "absolute"</Text>
          <Text style={styles.codeLine}>top: 40, right: 20</Text>
        </View>
      </View>

      {/* Z-Index Layering */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Z-Index Layering</Text>
        <Text style={styles.description}>Control stacking order</Text>

        <View style={styles.zIndexDemo}>
          <View
            style={[
              styles.layerBox,
              {
                backgroundColor: colors.primary,
                zIndex: 1,
                marginBottom: -20,
              },
            ]}
          >
            <Text style={styles.layerText}>zIndex: 1</Text>
          </View>

          <View
            style={[
              styles.layerBox,
              {
                backgroundColor: colors.secondary,
                zIndex: 2,
                marginBottom: -20,
              },
            ]}
          >
            <Text style={styles.layerText}>zIndex: 2</Text>
          </View>

          <View
            style={[
              styles.layerBox,
              {
                backgroundColor: colors.success,
                zIndex: 3,
              },
            ]}
          >
            <Text style={styles.layerText}>zIndex: 3</Text>
          </View>
        </View>

        <View style={styles.codeBox}>
          <Text style={styles.codeLine}>zIndex: higher value = on top</Text>
          <Text style={styles.codeLine}>zIndex: 1, 2, 3</Text>
        </View>
      </View>

      {/* Overlay Example */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Floating Button (Overlay)</Text>
        <Text style={styles.description}>Absolute positioned element</Text>

        <View style={styles.overlayDemo}>
          <View style={styles.contentArea}>
            <Text style={styles.contentText}>Main Content Area</Text>
          </View>

          <View
            style={[
              styles.fab,
              {
                position: "absolute",
                bottom: spacing.lg,
                right: spacing.lg,
              },
            ]}
          >
            <Ionicons name="add" size={28} color={colors.white} />
          </View>
        </View>

        <View style={styles.codeBox}>
          <Text style={styles.codeLine}>position: "absolute"</Text>
          <Text style={styles.codeLine}>bottom: 16, right: 16</Text>
        </View>
      </View>

      {/* Reference Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Reference</Text>

        <View style={styles.referenceSection}>
          <Text style={styles.refTitle}>Relative</Text>
          <Text style={styles.refText}>• Stays in normal flow</Text>
          <Text style={styles.refText}>• Offset from original position</Text>
          <Text style={styles.refText}>• Siblings adjust spacing</Text>
        </View>

        <View style={[styles.referenceSection, { marginTop: spacing.lg }]}>
          <Text style={styles.refTitle}>Absolute</Text>
          <Text style={styles.refText}>• Removed from flow</Text>
          <Text style={styles.refText}>• Positioned from parent</Text>
          <Text style={styles.refText}>• Siblings ignore it</Text>
        </View>

        <View style={[styles.referenceSection, { marginTop: spacing.lg }]}>
          <Text style={styles.refTitle}>Z-Index</Text>
          <Text style={styles.refText}>• Higher value = on top</Text>
          <Text style={styles.refText}>
            • Only works with positioned elements
          </Text>
          <Text style={styles.refText}>• Default is 0</Text>
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
    backgroundColor: "rgba(245, 158, 11, 0.1)",
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
    marginBottom: spacing.md,
  },
  description: {
    ...typography.body,
    color: colors.textLight,
    marginBottom: spacing.lg,
    fontStyle: "italic",
  },
  relativeDemo: {
    marginBottom: spacing.lg,
    height: 240,
    backgroundColor: "rgba(245, 158, 11, 0.05)",
    borderRadius: borderRadius.md,
    padding: spacing.md,
    justifyContent: "center",
  },
  absoluteDemo: {
    marginBottom: spacing.lg,
    height: 200,
    backgroundColor: "rgba(245, 158, 11, 0.05)",
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    justifyContent: "center",
  },
  box: {
    width: 80,
    height: 60,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: spacing.md,
  },
  boxBase: {
    backgroundColor: colors.warning,
  },
  boxText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: "600",
  },
  relativeOffset: {
    position: "relative",
    left: 20,
    top: 10,
    backgroundColor: colors.primary,
  },
  zIndexDemo: {
    marginBottom: spacing.lg,
    height: 200,
    justifyContent: "flex-end",
  },
  layerBox: {
    height: 70,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.md,
  },
  layerText: {
    ...typography.subtitle,
    color: colors.white,
    fontWeight: "600",
  },
  overlayDemo: {
    marginBottom: spacing.lg,
    height: 200,
    backgroundColor: "rgba(245, 158, 11, 0.05)",
    borderRadius: borderRadius.md,
    padding: spacing.lg,
  },
  contentArea: {
    flex: 1,
    backgroundColor: colors.lightBg,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.borderLight,
  },
  contentText: {
    ...typography.body,
    color: colors.textLight,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.full,
    backgroundColor: colors.warning,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.lg,
  },
  codeBox: {
    backgroundColor: "#1E293B",
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },
  codeLine: {
    ...typography.body,
    color: "#E2E8F0",
    marginBottom: spacing.xs,
    fontFamily: "monospace",
  },
  referenceSection: {
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  refTitle: {
    ...typography.subtitle,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  refText: {
    ...typography.body,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
});
