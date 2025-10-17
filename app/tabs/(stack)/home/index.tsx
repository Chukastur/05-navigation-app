import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/tabs/(stack)/products")}
          color="primary"
        >
          Productos
        </CustomButton>

        <CustomButton
          color="secondary"
          onPress={() => router.push("/tabs/profile")}
          className="mb-2"
        >
          Profile
        </CustomButton>

        <CustomButton
          color="tertiary"
          onPress={() => router.push("/tabs/(stack)/settings")}
          className="mb-2"
        >
          Ajustes
        </CustomButton>

        <Link href="/tabs/(stack)/products" asChild>
          <CustomButton variant="text-only" className="mb-2">
            Productos
          </CustomButton>
        </Link>
      </View>

      {/* <View>
        <Link className="mb-5 " href={"/products"}>
          Products
        </Link>
        <Link className="mb-5 " href={"/profile"}>
          Profile
        </Link>
        <Link className="mb-5 " href={"/settings"}>
          Settings
        </Link>
      </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
