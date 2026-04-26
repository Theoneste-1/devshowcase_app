import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, typography, borderRadius, shadows } from "../constants/theme";

const tools = [
  {
    id: "chrome",
    title: "Chrome (Web)",
    icon: "globe-outline",
    color: colors.primary,
    tips: [
      "Open DevTools and use Console for logs and stack traces.",
      "Use Sources tab to set breakpoints inside handlers.",
      "Check Network tab to inspect API requests and responses.",
    ],
  },
  {
    id: "vscode",
    title: "VS Code",
    icon: "bug-outline",
    color: colors.success,
    tips: [
      "Set breakpoints by clicking left of line numbers.",
      "Inspect variables using Watch and Debug Console.",
      "Use Call Stack to track where the crash started.",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Logging",
    icon: "phone-portrait-outline",
    color: colors.warning,
    tips: [
      "Use clear labels like [Auth], [API], [Navigation].",
      "Use console.warn for risky states and edge cases.",
      "Use console.error inside catch blocks with full context.",
    ],
  },
];

const codeExamples = [
  "console.log('[Home] button tapped', { step: 1 });",
  "console.warn('[API] slow response > 3s');",
  "console.error('[Login] failed', err);",
  "debugger; // pause execution in a debug session",
];

export default function DebuggingScreen() {
  const [logs, setLogs] = useState([]);
  const [count, setCount] = useState(0);

  const latestLog = useMemo(() => logs[0], [logs]);

  const pushLog = (type, message) => {
    const entry = `${new Date().toLocaleTimeString()} | ${type.toUpperCase()} | ${message}`;
    setLogs((prev) => [entry, ...prev].slice(0, 6));
  };

  const handleLogInfo = () => {
    const next = count + 1;
    setCount(next);
    console.log("[Debug Demo] Button tapped", { count: next });
    pushLog("log", `Button tapped count=${next}`);
  };

  const handleWarn = () => {
    console.warn("[Debug Demo] Slow operation detected");
    pushLog("warn", "Slow operation detected");
  };

  const handleError = () => {
    try {
      throw new Error("Simulated crash for presentation demo");
    } catch (err) {
      console.error("[Debug Demo] Caught error", err);
      pushLog("error", err.message);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <View style={styles.heroIcon}>
          <Ionicons name="construct-outline" size={36} color={colors.primary} />
        </View>
        <Text style={styles.title}>Debugging Tactics</Text>
        <Text style={styles.subtitle}>
          Learn practical logging and debugging workflows for web and mobile.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Live Practice</Text>
        <Text style={styles.sectionHint}>
          Tap buttons below and watch logs in terminal, Chrome DevTools, or VS Code debug console.
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={handleLogInfo}>
            <Ionicons name="information-circle-outline" size={18} color={colors.white} />
            <Text style={styles.buttonText}>Log Info</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: colors.warning }]} onPress={handleWarn}>
            <Ionicons name="alert-circle-outline" size={18} color={colors.white} />
            <Text style={styles.buttonText}>Warn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: colors.danger }]} onPress={handleError}>
            <Ionicons name="close-circle-outline" size={18} color={colors.white} />
            <Text style={styles.buttonText}>Error</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logBox}>
          <Text style={styles.logTitle}>Recent In-App Log Trail</Text>
          {logs.length === 0 ? (
            <Text style={styles.logPlaceholder}>No logs yet. Trigger one of the actions above.</Text>
          ) : (
            logs.map((entry) => (
              <Text key={entry} style={styles.logLine}>
                {entry}
              </Text>
            ))
          )}
          {latestLog ? <Text style={styles.latest}>Latest: {latestLog}</Text> : null}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Core Tools</Text>
        {tools.map((tool) => (
          <View key={tool.id} style={styles.card}>
            <View style={[styles.cardIcon, { backgroundColor: `${tool.color}22` }]}>
              <Ionicons name={tool.icon} size={22} color={tool.color} />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{tool.title}</Text>
              {tool.tips.map((tip) => (
                <Text key={tip} style={styles.cardTip}>
                  • {tip}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Code Snippets</Text>
        <View style={styles.codeBlock}>
          {codeExamples.map((line) => (
            <Text key={line} style={styles.codeLine}>
              {line}
            </Text>
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
    paddingBottom: spacing.xxl,
  },
  hero: {
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  heroIcon: {
    width: 72,
    height: 72,
    borderRadius: borderRadius.lg,
    backgroundColor: "rgba(37, 99, 235, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  title: {
    ...typography.h2,
    color: colors.textDark,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textLight,
    textAlign: "center",
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textDark,
    marginBottom: spacing.sm,
  },
  sectionHint: {
    ...typography.body,
    color: colors.textLight,
    marginBottom: spacing.md,
  },
  buttonRow: {
    flexDirection: "row",
    gap: spacing.sm,
    flexWrap: "wrap",
    marginBottom: spacing.md,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    gap: spacing.xs,
    ...shadows.sm,
  },
  buttonText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: "700",
  },
  logBox: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
    ...shadows.sm,
  },
  logTitle: {
    ...typography.subtitle,
    color: colors.textDark,
    marginBottom: spacing.sm,
  },
  logPlaceholder: {
    ...typography.body,
    color: colors.textMuted,
  },
  logLine: {
    ...typography.caption,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  latest: {
    ...typography.caption,
    color: colors.primary,
    marginTop: spacing.sm,
    fontWeight: "600",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
    flexDirection: "row",
    ...shadows.sm,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.md,
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    ...typography.subtitle,
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  cardTip: {
    ...typography.body,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  codeBlock: {
    backgroundColor: colors.darkBg,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
  },
  codeLine: {
    fontSize: 12,
    lineHeight: 18,
    color: "#BFDBFE",
    marginBottom: spacing.xs,
  },
});
