<template>
    <div class="home">
        <h1>home</h1>
        <Button
            text="Launch"
            :isLoading="isLoading"
            @click="this.isLoading = !this.isLoading"
        />
        <p>1</p>
        <Keyval keyText="name" valText="Nguyen Tung Lam" />
        <ModalBox
            title="Model box"
            :isShow="isLoading"
            @closeModal="isLoading = !isLoading"
            modalWidth="80%"
        >
            <Keyval keyText="name" valText="Nguyen Tung Lam" />
            <Keyval keyText="age" valText="18" />
            <Keyval keyText="email" valText="abc@gmail.com" />
            <div>
                <Button text="Cancel" />
                <Button text="Save" />
            </div>
        </ModalBox>
        <form>
            <Input
                label="name"
                type="text"
                @dataUpdated="updateValue"
                :disabled="false"
                :required="true"
                placeholder="Enter your name"
            />
            <Radio
                label="label"
                :radioData="radioData"
                @dataUpdated="updateValue"
                :disabled="false"
                :required="true"
            />
            <Keyval keyText="name" valText="Nguyen Tung Lam" />
            <Textarea
                label="description"
                @dataUpdated="updateValue"
                :disabled="false"
                :required="true"
                :row="5"
            ></Textarea>
        </form>
        <p>{{ myName }}</p>
        <!-- <p>________________________________________</p>
        <div style="width: 500px; height: 300px">
            <ListSearch
                :listData="listData1"
                @dataUpdated="updateValue"
                :selected="myName"
                :disabled="false"
            />
        </div>
        <p>________________________________________</p> -->
        <div style="width: 600px; height: 450px">
        <TabBar :tabBarList="tabBarList">
            <template v-slot:spend>
                <ListSearch
                    :listData="listData1"
                    @dataUpdated="updateValue"
                    :selected="myName"
                    :disabled="false"
                />
            </template>
            <template v-slot:income>
                <ListSearch
                    :listData="listData2"
                    @dataUpdated="updateValue"
                    :selected="myName"
                    :disabled="false"
                />
            </template>
        </TabBar>
        </div>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
    </div>
</template>

<script>
import Button from "../components/general/Button";
import Keyval from "../components/general/Keyval";
import ModalBox from "../components/general/ModalBox";
import Input from "../components/general/Form/Input";
import Radio from "../components/general/Form/Radio";
import Textarea from "../components/general/Form/Textarea";
import ListSearch from "../components/general/Form/ListSearch";
import TabBar from "../components/general/TabBar";

export default {
    name: "Home",
    data() {
        return {
            isLoading: false,
            myName: "",
            data: "",
            radioData: [
                {
                    name: "name1",
                    value: "value1",
                },
                {
                    name: "name2",
                    value: "value2",
                },
                {
                    name: "name3",
                    value: "value3",
                },
            ],
            listData1: [
                "eating & food",
                "rent",
                "water",
                "gas",
                "internet",
                "telephone",
                "TV",
                "transportation",
                "shopping",
                "friend & partner",
                "entertainment",
                "travel",
                "health",
                "charity & donations",
                "gift",
                "family",
                "education",
                "investment",
                "business",
                "insurance",
                "withdraw money",
                "others",
                "update balance",
            ],
            listData2: [
                "salary",
                "bonus",
                "award",
                "be donated",
                "sell stuff",
                "others",
                "update balance",
            ],
            tabBarList: ["spend", "income"],
        };
    },
    methods: {
        updateValue(value) {
            this.myName = value;
        },
    },
    components: {
        Button,
        Keyval,
        ModalBox,
        Input,
        Radio,
        Textarea,
        ListSearch,
        TabBar,
    },
};
</script>
<style scoped>
</style>