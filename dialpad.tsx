import { View, Button } from "react-native";

export default function DialPad() {
    return (
        <View>
            <Button
                title="1"
                onPress={() => console.log("pressed")}
            />
        </View>
    );
}