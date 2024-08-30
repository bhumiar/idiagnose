function checkSymptoms() {
    // Get the symptoms entered by the user
    var symptomsInput = document.getElementById("symptoms").value;

    // Basic validation - ensure the user entered some symptoms
    if (!symptomsInput.trim()) {
        alert("Please enter your symptoms.");
        return;
    }

    // Perform diagnosis based on the entered symptoms
    var diagnosis = performDiagnosis(symptomsInput);

    // Display the diagnosis result
    document.getElementById("result").innerHTML = "Diagnosis: " + diagnosis;
}

function performDiagnosis(symptoms) {
    // Array of symptoms and corresponding diagnoses
    var symptomDiagnosisMap = {
        "headache": "You may have a tension headache. Get plenty of rest and stay hydrated.",
        "fever": "You may have a viral infection. Rest and consult with a healthcare professional if symptoms persist.",
        "cough": "You may have a respiratory infection. Rest and stay hydrated. Consult with a healthcare professional if needed.",
        "skin redness": "You may have Sunburn or skin redness can sometimes be a sign of a health condition like lupus or scarlet fever, or a chronic disorder.",
        "stomach pain": "you may have Less serious causes of abdominal pain include constipation, irritable bowel syndrome, food allergies, lactose intolerance, food poisoning, and a stomach virus.",
        "stomachache": "you may have Less serious causes of abdominal pain include constipation, irritable bowel syndrome, food allergies, lactose intolerance, food poisoning, and a stomach virus.",
        "body pain": "Body pain can result from tiredness or exercise and commonly occur with infections such as the flu.",
        "Diarrhea": "You may have pain in the abdomen, nausea, bloating, possibly fever.Avoid foods that are milk-based ,drink more fluids.",
        "Mononucleosis": "You may have extreme fatigue, sore throat, fever, loss of appetite, and muscle aches. Take rest, eat healthy foods, avoid alcohol.",
        "Conjunctivitis" : "You may feel redness, itching, tearing, burning sensation in eye.Don’t rub your eyes, Use a cool wet washcloth to soak off any crusting.",
        "Flu": "You may have fever ,headache, fatigue, and often dry cough.Rest more ,avoid exercise,drink lots of fluids.",
        "Skin Allergy": "You may have itching, blistering, skin cracking, etc. Avoid using harsh soap or detergent, use anti-itch cream.",
        "Loss of vision": "You may have poor vision, loss of vision in darkness or sometimes complete loss of vision. Eat healthy diet having  high concentration of  vitamin A such as carrot, eggs, cheese, fruits etc.",
        "Scurvy": "You may have bleeding, wounds take longer time to heal. Eat food rich in vitamin C like cruciferous vegetables, strawberries, tomatoes,  etc.",
        "Malaria" :" You may have fever, sweats, chills, headaches, muscles aches, nausea, and vomiting.Increase protein intake. Consult to infectious disease specialist.",
        "Pneumonia":"You may have fever, dehydration, fatigue, loss of appetite, malaise, clammy skin, or sweating. Follow diet high in protein and stay hydrated. Consult with pulmonologists.",
        "pink eye": "You may feel redness, itching, tearing, burning sensation in eye.Don’t rub your eyes, Use a cool wet washcloth to soak off any crusting.",
        "red eye":"You may feel redness, itching, tearing, burning sensation in eye.Don’t rub your eyes, Use a cool wet washcloth to soak off any crusting.",
        "cold": "You may have a respiratory infection. Rest and stay hydrated. Consult with a healthcare professional if needed.",
        "throat pain": "You may have viral infections like the common cold or flu, bacterial infections like strep throat, or even irritation from smoking or allergies.",
        "sweating": "As excessive sweating (hyperhidrosis), which can be influenced by factors like heat, anxiety, or an underlying medical issue,stay hydrated",
        "loose motion": "You may have pain in the abdomen, nausea, bloating, possibly fever.Avoid foods that are milk-based ,drink more fluids.",
        "hair fall":" You may have aging, heredity and changes in hormone testosterone",
        "acne":"You may have Hormonal changes ,heavy sweating and humidity ",
        "back pain ": ""
        
        // Add more symptoms and diagnoses as needed
    };

    // Split the entered symptoms into an array
    var userSymptoms = symptoms.toLowerCase().split(",").map(symptom => symptom.trim());

    // Perform diagnosis based on the first symptom (replace with more complex logic if needed)
    var firstSymptom = userSymptoms[0];
    var diagnosis = symptomDiagnosisMap[firstSymptom] || "No specific diagnosis found. Consult with a healthcare professional for accurate diagnosis.";

    return diagnosis;
}
/*document.getElementById('btn').addEventListener('click', function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the URL of the HTML page you want to load
    var url = 'miniproject.html';

    // Set up a callback function to handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Insert the HTML content into the page container
            document.getElementById('pageContainer').innerHTML = xhr.responseText;
        }
    };

    // Open the request and send it
    xhr.open('GET', url, true);
    xhr.send();
});*/