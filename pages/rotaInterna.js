import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';

import Vimeo from './Vimeo';
import App from '../App'

const Tab = createBottomTabNavigator();

export default function RotaInterna() {

    const [info1, setInfo1] = useState('');
    const [info2, setInfo2] = useState('');

    return (

        <Tab.Navigator>
            <Tab.Screen
            name="Vimeo"
            component="Vimeo"
            >
            </Tab.Screen>

            <Tab.Screen
            name="App"
            component="App"
            ></Tab.Screen>
        </Tab.Navigator>
    )
}