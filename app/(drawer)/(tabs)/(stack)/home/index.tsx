import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/products")}
          color="primary"
        >
          Productos
        </CustomButton>

        <CustomButton
          color="secondary"
          onPress={() => router.push("/profile")}
          className="mb-2"
        >
          Profile
        </CustomButton>

        <CustomButton
          color="tertiary"
          onPress={() => router.push("/settings")}
          className="mb-2"
        >
          Ajustes
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-2">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>
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
