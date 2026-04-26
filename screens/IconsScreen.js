import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from "../constants/theme";

const iconSets = [
  {
    id: 1,
    title: "Ionicons",
    description: "Popular icon library",
    icons: [
      "home",
      "settings",
      "heart",
      "search",
      "camera",
      "mail",
      "phone",
      "star",
    ],
    component: Ionicons,
  },
  {
    id: 2,
    title: "Material Community",
    description: "Material Design icons",
    icons: [
      "github",
      "twitter",
      "linkedin",
      "facebook",
      "instagram",
      "spotify",
      "slack",
      "discord",
    ],
    component: MaterialCommunityIcons,
  },
  {
    id: 3,
    title: "Font Awesome 5",
    description: "Font Awesome icons",
    icons: [
      "check",
      "times",
      "bell",
      "user",
      "lock",
      "unlock",
      "trash",
      "download",
    ],
    component: FontAwesome5,
  },
];

const buttons = [
  {
    id: 1,
    label: "Primary",
    icon: "checkmark-done",
    backgroundColor: colors.primary,
  },
  {
    id: 2,
    label: "Secondary",
    icon: "heart",
    backgroundColor: colors.secondary,
  },
  {
    id: 3,
    label: "Success",
    icon: "checkmark-circle",
    backgroundColor: colors.success,
  },
  {
    id: 4,
    label: "Warning",
    icon: "alert",
    backgroundColor: colors.warning,
  },
  {
    id: 5,
    label: "Danger",
    icon: "close-circle",
    backgroundColor: colors.danger,
  },
];

export default function IconsScreen() {
  const [expandedSet, setExpandedSet] = useState(1);

  const handleButtonPress = (label) => {
    Alert.alert("Button Pressed", `You tapped the ${label} button!`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="star" size={32} color={colors.primary} />
        </View>
        <View>
          <Text style={styles.title}>Icons & Buttons</Text>
          <Text style={styles.subtitle}>Vector icons & UI library buttons</Text>
        </View>
      </View>

      {/* Icon Libraries */}
      {iconSets.map((set) => (
        <View key={set.id} style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              setExpandedSet(expandedSet === set.id ? null : set.id)
            }
            style={styles.setHeader}
          >
            <View>
              <Text style={styles.cardTitle}>{set.title}</Text>
              <Text style={styles.description}>{set.description}</Text>
            </View>
            <Ionicons
              name={expandedSet === set.id ? "chevron-up" : "chevron-down"}
              size={24}
              color={colors.textLight}
            />
          </TouchableOpacity>

          {expandedSet === set.id && (
            <View style={styles.iconGrid}>
              {set.icons.map((icon, idx) => {
                const IconComponent = set.component;
                return (
                  <TouchableOpacity
                    key={idx}
                    style={styles.iconBox}
                    onPress={() => Alert.alert("Icon", icon)}
                  >
                    <IconComponent
                      name={icon}
                      size={28}
                      color={colors.primary}
                    />
                    <Text style={styles.iconName}>{icon}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      ))}

      {/* Button Variants */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Button Variants</Text>
        <Text style={styles.description}>Interactive buttons with icons</Text>

        <View style={styles.buttonGrid}>
          {buttons.map((btn) => (
            <TouchableOpacity
              key={btn.id}
              style={[styles.button, { backgroundColor: btn.backgroundColor }]}
              onPress={() => handleButtonPress(btn.label)}
              activeOpacity={0.7}
            >
              <Ionicons name={btn.icon} size={20} color={colors.white} />
              <Text style={styles.buttonText}>{btn.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Outline Buttons */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Outline Buttons</Text>

        <View style={styles.outlineButtonContainer}>
          {buttons.slice(0, 3).map((btn) => (
            <TouchableOpacity
              key={btn.id}
              style={[
                styles.outlineButton,
                { borderColor: btn.backgroundColor },
              ]}
              onPress={() => handleButtonPress(btn.label)}
              activeOpacity={0.7}
            >
              <Ionicons name={btn.icon} size={18} color={btn.backgroundColor} />
              <Text
                style={[
                  styles.outlineButtonText,
                  { color: btn.backgroundColor },
                ]}
              >
                {btn.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Icon Sizes */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Icon Sizes</Text>

        <View style={styles.sizeContainer}>
          {[16, 24, 32, 40].map((size) => (
            <View key={size} style={styles.sizeBox}>
              <Ionicons name="star" size={size} color={colors.primary} />
              <Text style={styles.sizeLabel}>{size}px</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Icon With Text */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Icons With Text</Text>

        <View style={styles.iconTextContainer}>
          <View style={styles.iconTextItem}>
            <View style={styles.iconBadge}>
              <Ionicons name="home" size={20} color={colors.white} />
            </View>
            <View>
              <Text style={styles.itemLabel}>Home</Text>
              <Text style={styles.itemSubtext}>Navigate to home</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textLight}
            />
          </View>

          <View style={styles.iconTextItem}>
            <View
              style={[styles.iconBadge, { backgroundColor: colors.secondary }]}
            >
              <Ionicons name="settings" size={20} color={colors.white} />
            </View>
            <View>
              <Text style={styles.itemLabel}>Settings</Text>
              <Text style={styles.itemSubtext}>Configure app</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textLight}
            />
          </View>

          <View style={styles.iconTextItem}>
            <View
              style={[styles.iconBadge, { backgroundColor: colors.success }]}
            >
              <Ionicons name="notifications" size={20} color={colors.white} />
            </View>
            <View>
              <Text style={styles.itemLabel}>Notifications</Text>
              <Text style={styles.itemSubtext}>12 new messages</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textLight}
            />
          </View>
        </View>
      </View>

      {/* Icon States */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Icon States</Text>

        <View style={styles.statesContainer}>
          <View style={styles.stateBox}>
            <Ionicons name="heart" size={32} color={colors.primary} />
            <Text style={styles.stateLabel}>Normal</Text>
          </View>
          <View style={styles.stateBox}>
            <Ionicons name="heart" size={32} color={colors.danger} />
            <Text style={styles.stateLabel}>Active</Text>
          </View>
          <View style={styles.stateBox}>
            <Ionicons name="heart" size={32} color={colors.textMuted} />
            <Text style={styles.stateLabel}>Disabled</Text>
          </View>
        </View>
      </View>

      {/* Quick Reference */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Icon Libraries Available</Text>

        <View style={styles.refItem}>
          <View style={styles.refBullet} />
          <View style={{ flex: 1 }}>
            <Text style={styles.refTitle}>@expo/vector-icons</Text>
            <Text style={styles.refText}>
              Multiple icon sets: Ionicons, FontAwesome, Material Design
            </Text>
          </View>
        </View>

        <View style={styles.refItem}>
          <View style={styles.refBullet} />
          <View style={{ flex: 1 }}>
            <Text style={styles.refTitle}>Easy Integration</Text>
            <Text style={styles.refText}>
              Import and use directly, no configuration needed
            </Text>
          </View>
        </View>

        <View style={styles.refItem}>
          <View style={styles.refBullet} />
          <View style={{ flex: 1 }}>
            <Text style={styles.refTitle}>Customizable</Text>
            <Text style={styles.refText}>
              Control size, color, and other properties
            </Text>
          </View>
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
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  setHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    ...typography.subtitle,
    color: colors.textDark,
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.body,
    color: colors.textLight,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: spacing.lg,
  },
  iconBox: {
    width: "25%",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  iconName: {
    ...typography.caption,
    color: colors.textDark,
    marginTop: spacing.sm,
    textAlign: "center",
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: spacing.lg,
  },
  button: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    gap: spacing.sm,
    ...shadows.sm,
  },
  buttonText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: "600",
  },
  outlineButtonContainer: {
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  outlineButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 2,
    gap: spacing.sm,
  },
  outlineButtonText: {
    ...typography.caption,
    fontWeight: "600",
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: "rgba(37, 99, 235, 0.05)",
    borderRadius: borderRadius.md,
  },
  sizeBox: {
    alignItems: "center",
  },
  sizeLabel: {
    ...typography.caption,
    color: colors.textDark,
    marginTop: spacing.sm,
    fontWeight: "600",
  },
  iconTextContainer: {
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  iconTextItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(37, 99, 235, 0.05)",
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    gap: spacing.md,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  itemLabel: {
    ...typography.subtitle,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  itemSubtext: {
    ...typography.caption,
    color: colors.textLight,
  },
  statesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: spacing.lg,
  },
  stateBox: {
    alignItems: "center",
  },
  stateLabel: {
    ...typography.caption,
    color: colors.textDark,
    marginTop: spacing.md,
    fontWeight: "600",
  },
  refItem: {
    flexDirection: "row",
    marginBottom: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  refBullet: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    marginRight: spacing.md,
    marginTop: spacing.sm,
  },
  refTitle: {
    ...typography.subtitle,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  refText: {
    ...typography.body,
    color: colors.textLight,
  },
});
