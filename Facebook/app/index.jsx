import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const inputStyle = {
  borderWidth: 1,
  borderColor: "#dddfe2",
  borderRadius: 6,
  paddingHorizontal: 14,
  paddingVertical: 12,
  fontSize: 13,
  color: "#1c1e21",
  marginBottom: 12,
  backgroundColor: "#f5f6f7",
};

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#0082FB" }}>
        <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
          <View
            style={{ alignItems: "center", marginBottom: 32, marginTop: 50 }}
          >
            <Image
              source={{
                uri: "data:image/png;base64,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",
              }}
              style={{ width: 200, height: 70 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 13,
                color: "#444343",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Connect with the world around you in just one click.
            </Text>
          </View>
          
          <TextInput
            style={inputStyle}
            placeholder="First name"
            placeholderTextColor="#b2b7c5"
          />
          <TextInput
            style={inputStyle}
            placeholder="Last name"
            placeholderTextColor="#b2b7c5"
          />
          <TextInput
            style={inputStyle}
            placeholder="Date of Birth"
            placeholderTextColor="#b2b7c5"
          />
          <TextInput
            style={inputStyle}
            placeholder="Email address"
            placeholderTextColor="#b2b7c5"
          />
          <TextInput
            style={inputStyle}
            placeholder="Password"
            placeholderTextColor="#b2b7c5"
          />

          <Text
            style={{
              fontSize: 12,
              color: "#444343",
              textAlign: "center",
              marginVertical: 16,
              lineHeight: 18,
            }}
          >
            By clicking Sign Up, you agree to our{" "}
            <Text style={{ color: "#FFFF" }}>Terms, Privacy Policy</Text>, and{" "}
            <Text style={{ color: "#FFFF" }}>Cookies Policy</Text>.
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#FFFF",
              paddingVertical: 13,
              alignItems: "center",
              borderRadius: 9,
            }}
          >
            <Text style={{ color: "#1877F2", fontWeight: "600", fontSize: 11 }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 13, color: "#444343" }}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity>
              <Text
                style={{ color: "#ffffff", fontWeight: "600", fontSize: 11 }}
              >
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
