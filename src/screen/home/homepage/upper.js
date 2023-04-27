import Poster from "../../../component/poster";
import Firstlist from "../../../component/firstlist";
import { View } from "react-native";
export default ({ items }) => {
    return <View>
        <Poster items={items} />
        <Firstlist items={items} />
    </View>
}