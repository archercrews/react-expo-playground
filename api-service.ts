export default async function getPhoneNumberData(phoneNumber: string) {
    // TODO: put this in a config somewhere
    const apiKey = "551ada7a514610319df2f57a56088348";
    const response = await fetch(
        `http://apilayer.net/api/validate?access_key=${apiKey}&number=1${phoneNumber}`
        );
    return response.json();
}