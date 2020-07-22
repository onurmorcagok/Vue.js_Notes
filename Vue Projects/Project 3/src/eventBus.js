import Vue from 'vue'

export const EventBus = new Vue();

export const EventBusListener = {
    WRAPPER_MESSAGE: 'CHILD_MESSAGE',
    WRAPPER_1_MESSAGE: 'CHILD_1_MESSAGE',
    WRAPPER_2_MESSAGE: 'CHILD_2_MESSAGE',
};
