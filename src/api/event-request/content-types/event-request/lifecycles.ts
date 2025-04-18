
export default {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;
        console.log('Lifecycle Hook Triggered. Inserted Object:', result);

        const insertedData = result;

        try{
            await strapi.plugins['email'].services.email.send({
                to: 'admin@bmwmdz.com',
                from: 'admin@bmwmdz.com', //e.g. single sender verification in SendGrid
                cc: '',
                bcc: '',
                replyTo: 'valid email address',
                subject: 'The Strapi Email plugin worked successfully',
                text: `A new object has been inserted:\n\n${JSON.stringify(insertedData, null, 2)}`,
                html: `<p>A new object has been inserted:</p><pre>${JSON.stringify(insertedData, null, 2)}</pre>`,
              }),
              strapi.log.info('Email sent successfully.');
        } catch(err) {
            strapi.log.error('Failed to send email:', err);
        }
    },
    async afterUpdate(event) {
        const { result, params } = event;

        console.log('result: ' + JSON.stringify(result));
    
        // After update logic can be added here, for example, if you want to send an email.
        // This will trigger after the update operation is finished.
    
        /*if (result.status) {
          strapi.log.info(`Product with ID ${result.id} has updated status to: ${result.status}`);
          
          // You can also add any custom logic here
        } */
    },
}
