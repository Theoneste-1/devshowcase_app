import React from "react";
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

const features = [
  {
    id: 1,
    title: "Responsive Design",
    icon: "phone-portrait",
    description: "Dimensions API & Orientation detection",
    color: colors.primary,
    route: "Responsive",
  },
  {
    id: 2,
    title: "Flexbox Layout",
    icon: "git-branch",
    description: "Master flex properties",
    color: colors.success,
    route: "Flexbox",
  },
  {
    id: 3,
    title: "Positioning",
    icon: "location",
    description: "Absolute vs relative & zIndex",
    color: colors.warning,
    route: "Positioning",
  },
  {
    id: 4,
    title: "Styling",
    icon: "palette",
    description: "Borders, shadows & typography",
    color: colors.danger,
    route: "Styling",
  },
  {
    id: 5,
    title: "Icons & Buttons",
    icon: "star",
    description: "Vector icons & UI components",
    color: colors.primary,
    route: "Icons",
  },
  {
    id: 6,
    title: "Debugging Tactics",
    icon: "bug",
    description: "Logging, Chrome, VS Code, mobile debug flow",
    color: colors.secondary,
    route: "Debugging",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroIcon}>
          <Ionicons name="code" size={48} color={colors.primary} />
        </View>
        <Text style={styles.heroTitle}>DevShowcaseApp</Text>
        <Text style={styles.heroSubtitle}>
          Learn React Native concepts through interactive examples
        </Text>
      </View>

      {/* Features Grid */}
      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>Explore Topics</Text>

        {features.map((feature) => (
          <TouchableOpacity
            key={feature.id}
            style={styles.featureCard}
            onPress={() => navigation.navigate(feature.route)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.featureIconBox,
                { backgroundColor: feature.color },
              ]}
            >
              <Ionicons name={feature.icon} size={28} color={colors.white} />
            </View>

            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>
                {feature.description}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textLight}
              style={styles.featureArrow}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Info Cards */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>How to Use</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoBadge}>
            <Text style={styles.infoBadgeText}>1</Text>
          </View>
          <View>
            <Text style={styles.infoTitle}>Select a Topic</Text>
            <Text style={styles.infoText}>
              Tap any topic above to see interactive examples
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoBadge}>
            <Text style={styles.infoBadgeText}>2</Text>
          </View>
          <View>
            <Text style={styles.infoTitle}>Learn Concepts</Text>
            <Text style={styles.infoText}>
              Each screen teaches a specific React Native concept
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoBadge}>
            <Text style={styles.infoBadgeText}>3</Text>
          </View>
          <View>
            <Text style={styles.infoTitle}>Interact & Explore</Text>
            <Text style={styles.infoText}>
              Try buttons, rotate device, and inspect the code patterns
            </Text>
          </View>
        </View>
      </View>

      {/* Tech Stack */}
      <View style={styles.techStack}>
        <Text style={styles.sectionTitle}>Built With</Text>
        <View style={styles.techContainer}>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>React Native</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>Expo</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>Navigation</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>Vector Icons</Text>
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
  hero: {
    alignItems: "center",
    marginBottom: spacing.xxl,
    paddingVertical: spacing.xl,
  },
  heroIcon: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.lg,
    backgroundColor: "rgba(37, 99, 235, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  heroTitle: {
    ...typography.h1,
    color: colors.textDark,
    marginBottom: spacing.md,
  },
  heroSubtitle: {
    ...typography.body,
    color: colors.textLight,
    textAlign: "center",
    maxWidth: "90%",
  },
  featuresContainer: {
    marginBottom: spacing.xxl,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textDark,
    marginBottom: spacing.lg,
  },
  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  featureIconBox: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.lg,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    ...typography.subtitle,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  featureDescription: {
    ...typography.body,
    color: colors.textLight,
  },
  featureArrow: {
    marginLeft: spacing.md,
  },
  infoSection: {
    marginBottom: spacing.xxl,
  },
  infoCard: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  infoBadge: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.lg,
  },
  infoBadgeText: {
    ...typography.subtitle,
    color: colors.white,
    fontWeight: "700",
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
  techStack: {
    marginBottom: spacing.lg,
  },
  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  techBadge: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 2,
    borderColor: colors.primary,
    ...shadows.sm,
  },
  techText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: "600",
  },
});
