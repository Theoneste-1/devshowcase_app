import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from "../constants/theme";

export default function ResponsiveScreen() {
  const [dimensions, setDimensions] = useState({
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height,
  });
  const [orientation, setOrientation] = useState(
    Dimensions.get("window").width < Dimensions.get("window").height
      ? "portrait"
      : "landscape",
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({
        screenWidth: window.width,
        screenHeight: window.height,
      });
      setOrientation(window.width < window.height ? "portrait" : "landscape");
    });

    return () => subscription?.remove();
  }, []);

  const isPortrait = orientation === "portrait";
  const containerWidth = isPortrait ? "100%" : "50%";

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="phone-portrait" size={32} color={colors.primary} />
        </View>
        <View>
          <Text style={styles.title}>Responsive Screen</Text>
          <Text style={styles.subtitle}>
            Dimensions API & Orientation Detection
          </Text>
        </View>
      </View>

      {/* Orientation Badge */}
      <View
        style={[
          styles.badge,
          {
            backgroundColor: isPortrait
              ? "rgba(37, 99, 235, 0.1)"
              : "rgba(124, 58, 237, 0.1)",
          },
        ]}
      >
        <Ionicons
          name={isPortrait ? "phone-portrait" : "phone-landscape"}
          size={16}
          color={isPortrait ? colors.primary : colors.secondary}
        />
        <Text
          style={[
            styles.badgeText,
            {
              color: isPortrait ? colors.primary : colors.secondary,
            },
          ]}
        >
          {orientation.toUpperCase()}
        </Text>
      </View>

      {/* Dimensions Info */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Device Dimensions</Text>
        <View style={styles.dimensionRow}>
          <View style={styles.dimensionBox}>
            <Text style={styles.dimensionLabel}>Width</Text>
            <Text style={styles.dimensionValue}>
              {Math.round(dimensions.screenWidth)}px
            </Text>
          </View>
          <View style={styles.dimensionBox}>
            <Text style={styles.dimensionLabel}>Height</Text>
            <Text style={styles.dimensionValue}>
              {Math.round(dimensions.screenHeight)}px
            </Text>
          </View>
        </View>
      </View>

      {/* Responsive Grid Demo */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Responsive Grid Layout</Text>
        <Text style={styles.description}>Adapts based on screen size</Text>
        <View style={styles.gridContainer}>
          {[1, 2, 3, 4].map((item) => (
            <View
              key={item}
              style={[
                styles.gridItem,
                {
                  width: isPortrait ? "48%" : "23%",
                  marginBottom: spacing.md,
                  marginRight:
                    [1, 3].includes(item) && isPortrait ? spacing.md : 0,
                },
              ]}
            >
              <View style={styles.gridItemContent}>
                <Ionicons name="image" size={24} color={colors.primary} />
                <Text style={styles.gridItemText}>Item {item}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Adaptive Typography */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Adaptive Typography</Text>
        <View style={styles.textDemo}>
          <Text style={[styles.textLarge, { fontSize: isPortrait ? 20 : 16 }]}>
            This text scales with screen size
          </Text>
        </View>
      </View>

      {/* Info */}
      <View style={styles.infoBox}>
        <Ionicons name="information-circle" size={20} color={colors.primary} />
        <View style={{ flex: 1, marginLeft: spacing.md }}>
          <Text style={styles.infoTitle}>Responsive Design</Text>
          <Text style={styles.infoText}>
            Rotate your device to see how layouts adapt to different
            orientations
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
    backgroundColor: "rgba(37, 99, 235, 0.1)",
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
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    alignSelf: "flex-start",
    marginBottom: spacing.lg,
  },
  badgeText: {
    ...typography.caption,
    marginLeft: spacing.sm,
    fontWeight: "600",
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
  },
  dimensionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dimensionBox: {
    flex: 1,
    backgroundColor: "rgba(37, 99, 235, 0.05)",
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginRight: spacing.md,
    alignItems: "center",
  },
  dimensionLabel: {
    ...typography.caption,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  dimensionValue: {
    ...typography.h3,
    color: colors.primary,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    backgroundColor: "rgba(37, 99, 235, 0.05)",
    borderRadius: borderRadius.md,
    overflow: "hidden",
  },
  gridItemContent: {
    padding: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItemText: {
    ...typography.caption,
    color: colors.textDark,
    marginTop: spacing.sm,
  },
  textDemo: {
    backgroundColor: "rgba(124, 58, 237, 0.05)",
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: "center",
  },
  textLarge: {
    ...typography.subtitle,
    color: colors.secondary,
    textAlign: "center",
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: "rgba(37, 99, 235, 0.1)",
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  infoTitle: {
    ...typography.subtitle,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  infoText: {
    ...typography.body,
    color: colors.textLight,
  },
});
