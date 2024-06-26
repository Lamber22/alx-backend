#!/usr/bin/yarn dev
import { createQueue } from "kue";

const queue = createQueue({ name: 'push_notification_code' });

const job = queue.create('push_notification_code', {
    phoneNumber: '0815741868',
    message: 'Your account has been registered',
});

job
    .on('enqueue', () => {
        console.log('Notification job created:', job.id);
    })
    .on('complete', () => {
        console.log('Notification job completed');
    })
    .on('failed', () => {
        console.log('Notification job has failed');
    });
job.save();