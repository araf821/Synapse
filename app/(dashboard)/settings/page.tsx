import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Shield,
  Bell,
  Palette,
  Download,
  Trash2,
  Key,
  Globe,
  Calendar,
  Activity,
  Settings as SettingsIcon,
  AlertCircle,
  Check,
} from "lucide-react";
import Image from "next/image";

function SettingsSection({
  title,
  description,
  icon: Icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-5" />
          </div>
          <div>
            <CardTitle className="font-serif text-lg font-semibold">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function SettingItem({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex-1">
        <Label className="text-sm font-medium">{label}</Label>
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="ml-4">{children}</div>
    </div>
  );
}

export default async function SettingsPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const user = session.user;

  // Mock activity data
  const activityStats = {
    synthesesCompleted: 12,
    totalThinkingTime: "24h 32m",
    challengesAnswered: 47,
    averageSessionLength: "18m",
    longestStreak: 7,
    joinedDate: "November 2024",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pt-24 pb-16">
      {/* Background Enhancement */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/3 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/3 h-48 w-48 rounded-full bg-accent/5 blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <SettingsIcon className="mr-2 size-4" />
            Account Settings
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Settings
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Manage your account, preferences, and cognitive journey.
          </p>
        </div>

        <div className="space-y-8">
          {/* Profile Settings */}
          <SettingsSection
            title="Profile"
            description="Your account information and public details"
            icon={User}
          >
            <div className="space-y-6">
              {/* Profile Picture & Basic Info */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      className="size-20 rounded-full object-cover"
                      width={80}
                      height={80}
                    />
                  ) : (
                    <div className="flex size-20 items-center justify-center rounded-full bg-primary text-background">
                      <User className="size-8" />
                    </div>
                  )}
                  <div className="absolute -right-1 -bottom-1 rounded-full bg-background p-1">
                    <Badge className="h-5 w-5 rounded-full bg-green-500 p-0"></Badge>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    {user.name || "Anonymous User"}
                  </h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    <span>Joined {activityStats.joinedDate}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" disabled>
                  Change Photo
                </Button>
              </div>

              {/* Name and Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    defaultValue={user.name || ""}
                    disabled
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user.email || ""}
                    disabled
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself and your thinking journey..."
                  className="mt-1"
                  disabled
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Share your expertise, interests, or goals. (Coming soon)
                </p>
              </div>

              <div className="rounded-lg bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="size-4" />
                  <span>
                    Profile editing is coming soon. Contact support if you need
                    to update your information.
                  </span>
                </div>
              </div>
            </div>
          </SettingsSection>

          {/* Account Security */}
          <SettingsSection
            title="Security"
            description="Manage your account security and authentication"
            icon={Shield}
          >
            <div className="space-y-4">
              <SettingItem
                label="Account Provider"
                description="How you sign in to Synapse"
              >
                <div className="flex items-center gap-2">
                  {user.email?.includes("gmail") ||
                  user.email?.includes("google") ? (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <div className="size-3 rounded-full bg-red-500"></div>
                      Google
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <div className="size-3 rounded-full bg-blue-500"></div>
                      Discord
                    </Badge>
                  )}
                </div>
              </SettingItem>

              <SettingItem
                label="Two-Factor Authentication"
                description="Add an extra layer of security to your account"
              >
                <Button variant="outline" size="sm" disabled>
                  Enable 2FA
                </Button>
              </SettingItem>

              <SettingItem
                label="Active Sessions"
                description="Manage devices signed into your account"
              >
                <Button variant="outline" size="sm" disabled>
                  View Sessions
                </Button>
              </SettingItem>

              <div className="rounded-lg bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 text-green-600" />
                  <span>
                    Your account is secured through{" "}
                    {user.email?.includes("gmail") ||
                    user.email?.includes("google")
                      ? "Google"
                      : "Discord"}{" "}
                    OAuth. Additional security features coming soon.
                  </span>
                </div>
              </div>
            </div>
          </SettingsSection>

          {/* Preferences */}
          <SettingsSection
            title="Preferences"
            description="Customize your Synapse experience"
            icon={Palette}
          >
            <div className="space-y-4">
              <SettingItem
                label="Theme"
                description="Choose your preferred appearance"
              >
                <Badge variant="outline">Light (Default)</Badge>
              </SettingItem>

              <SettingItem
                label="Language"
                description="Select your preferred language"
              >
                <Badge variant="outline" className="flex items-center gap-1">
                  <Globe className="size-3" />
                  English
                </Badge>
              </SettingItem>

              <SettingItem
                label="Challenge Difficulty"
                description="Default difficulty for AI challenges"
              >
                <Badge variant="outline">Adaptive</Badge>
              </SettingItem>

              <div className="rounded-lg bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="size-4" />
                  <span>
                    Preference customization is coming soon. We{"'"}re building
                    a comprehensive settings system.
                  </span>
                </div>
              </div>
            </div>
          </SettingsSection>

          {/* Notifications */}
          <SettingsSection
            title="Notifications"
            description="Control how and when you receive updates"
            icon={Bell}
          >
            <div className="space-y-4">
              <SettingItem
                label="Email Notifications"
                description="Receive updates about your synthesis progress"
              >
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Enabled
                </Badge>
              </SettingItem>

              <SettingItem
                label="Weekly Insights"
                description="Get a summary of your thinking patterns"
              >
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Enabled
                </Badge>
              </SettingItem>

              <SettingItem
                label="New Features"
                description="Be the first to know about new capabilities"
              >
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Enabled
                </Badge>
              </SettingItem>

              <div className="rounded-lg bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="size-4" />
                  <span>
                    Notification preferences will be fully customizable soon.
                    Currently using smart defaults.
                  </span>
                </div>
              </div>
            </div>
          </SettingsSection>

          {/* Activity & Stats */}
          <SettingsSection
            title="Activity"
            description="Your cognitive journey and progress metrics"
            icon={Activity}
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {activityStats.synthesesCompleted}
                </div>
                <div className="text-sm text-muted-foreground">
                  Syntheses Completed
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {activityStats.totalThinkingTime}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Thinking Time
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {activityStats.challengesAnswered}
                </div>
                <div className="text-sm text-muted-foreground">
                  Challenges Answered
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {activityStats.averageSessionLength}
                </div>
                <div className="text-sm text-muted-foreground">
                  Avg Session Length
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {activityStats.longestStreak} days
                </div>
                <div className="text-sm text-muted-foreground">
                  Longest Streak
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {activityStats.joinedDate}
                </div>
                <div className="text-sm text-muted-foreground">
                  Member Since
                </div>
              </div>
            </div>
          </SettingsSection>

          {/* Data & Privacy */}
          <SettingsSection
            title="Data & Privacy"
            description="Manage your data and privacy settings"
            icon={Key}
          >
            <div className="space-y-4">
              <SettingItem
                label="Export Data"
                description="Download all your synthesis data and responses"
              >
                <Button variant="outline" size="sm" disabled>
                  <Download className="mr-2 size-4" />
                  Export
                </Button>
              </SettingItem>

              <SettingItem
                label="Data Retention"
                description="How long we keep your synthesis data"
              >
                <Badge variant="outline">Indefinite</Badge>
              </SettingItem>

              <SettingItem
                label="Analytics"
                description="Help improve Synapse with anonymous usage data"
              >
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Enabled
                </Badge>
              </SettingItem>

              <div className="border-t border-border/50 pt-4">
                <SettingItem
                  label="Delete Account"
                  description="Permanently delete your account and all data"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="mr-2 size-4" />
                    Delete
                  </Button>
                </SettingItem>
              </div>

              <div className="rounded-lg bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 text-green-600" />
                  <span>
                    Your data is encrypted and secure. Full data management
                    tools coming soon.
                  </span>
                </div>
              </div>
            </div>
          </SettingsSection>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-center">
          <Button disabled className="px-8">
            Save Changes
            <span className="ml-2 text-xs opacity-75">(Coming Soon)</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
