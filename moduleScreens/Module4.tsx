import React from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
const Module4 = ({ moduleId }: { moduleId: number }) => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{ gap: 8 }}>
				<View>
					<Text
						style={{
							fontSize: 18,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						Foreign-body Airway Obstructions
					</Text>
				</View>

				<Text
					style={{ fontSize: 18, textAlign: "justify", fontFamily: "Poppins" }}
				>
					Also known as choking, it is a common breathing emergency that occurs
					when the person's airway is partially or completely blocked by a
					foreign object, such as a piece of food or a small toy; by swelling in
					the mouth or throat; or by fluids, such as vomit or blood.
				</Text>

				<View style={{ marginTop: 15, gap: 10 }}>
					<Text style={{ fontSize: 20, fontWeight: "700" }}>
						Two Types of Obstruction
					</Text>

					<Text
						style={{
							fontSize: 16,
							lineHeight: 25,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						<Text style={{ fontWeight: "bold" }}>1.Anatomical</Text>{" "}
						Obstruction. When tongue drops back and obstructs the throat. Other
						causes are acute asthma, croup, diphtheria, swelling and whooping
						cough.
					</Text>
					<Text
						style={{
							fontSize: 16,
							lineHeight: 25,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						<Text style={{ fontWeight: "bold" }}>
							2.Mechanical Obstruction.
						</Text>{" "}
						When foreign objects lodged in the pharynx or airways: solid or
						liquid accumulate in the back of the throat.
					</Text>
				</View>

				<View
					style={{
						width: "100%",
						borderWidth: 1,
						borderStyle: "solid",
						borderColor: "black",
						borderRadius: 5,
						marginTop: 20,
					}}
				>
					<View
						style={{ width: "100%", backgroundColor: "#7E0303", padding: 12 }}
					>
						<Text
							style={{
								fontSize: 18,
								fontFamily: "Poppins",
								textAlign: "center",
								color: "white",
							}}
						>
							Classification of Airway Obstruction
						</Text>
					</View>

					<View style={{ marginTop: 15, gap: 10, padding: 10 }}>
						<Text
							style={{
								fontSize: 16,
								lineHeight: 25,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							<Text style={{ fontWeight: "bold" }}>
								1.Mild Airway Obstruction
							</Text>{" "}
							is a type of obstruction in which patient can still talk, cough,
							make wheezing sounds, and answer the question, "Are you choking?"
						</Text>
						<Text
							style={{
								fontSize: 16,
								lineHeight: 25,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							<Text style={{ fontWeight: "bold" }}>
								2.Severe Airway Obstruction
							</Text>{" "}
							is characterized by poor air exchange and increased breathing
							difficulty, inability to speak, cough and breathe.
						</Text>
					</View>
				</View>

				<View
					style={{
						width: "100%",
						backgroundColor: "#7E0303",
						padding: 12,
						gap: 8,
						borderRadius: 5,
					}}
				>
					<Text style={{ fontSize: 22, fontFamily: "Poppins", color: "white" }}>
						Causes:
					</Text>

					<Text style={{ fontSize: 16, color: "white", fontFamily: "Poppins" }}>
						The most common cause of choking in adults is airway obstruction
						which may be caused by the following:
					</Text>

					<View style={{ gap: 7 }}>
						<Text
							style={{ fontSize: 16, color: "white", fontFamily: "Poppins" }}
						>
							- Swallow large pieces of poorly chewed food.
						</Text>
						<Text
							style={{ fontSize: 16, color: "white", fontFamily: "Poppins" }}
						>
							- Drinking alcohol
						</Text>
						<Text
							style={{ fontSize: 16, color: "white", fontFamily: "Poppins" }}
						>
							- Wearing dentures
						</Text>
						<Text
							style={{ fontSize: 16, color: "white", fontFamily: "Poppins" }}
						>
							- Eating while talking excitedly, laughing, or eating too fast
						</Text>
						<Text
							style={{ fontSize: 16, color: "white", fontFamily: "Poppins" }}
						>
							- Walking, playing, or running with food or objects in the mouth.
						</Text>
						<Text
							style={{ fontSize: 16, color: "white", fontFamily: "Poppins" }}
						>
							- In infants and children, choking occurs while eating or by
							putting non-food items such as coins or toys inside the mouth
							while playing.
						</Text>
					</View>
				</View>

				<View style={{ marginTop: 15 }}>
					<Text style={{ fontSize: 20, fontFamily: "Poppins" }}>
						Back blows & Abdominal/Chest thrust.
					</Text>
				</View>

				<Text
					style={{ fontSize: 18, textAlign: "justify", fontFamily: "Poppins" }}
				>
					These are first aid procedure performed on a person who is choking.
					This is done by applying pressure on the upper back and upper abdomen
					or on the chest at the center of the breastbone from the back to
					remove the object that is causing the obstruction.
				</Text>

				<View style={{ marginTop: 15, gap: 7 }}>
					<Image
						style={{ width: "100%", height: 180, marginTop: 20 }}
						source={require(`../assets/images/30.Back blows & Abdominal.jpg`)}
					/>
					<Image
						style={{ width: "100%", height: 180, marginTop: 20 }}
						source={require(`../assets/images/31..Back blows & Abdominal.jpg`)}
					/>
					<Image
						style={{ width: "100%", height: 180, marginTop: 20 }}
						source={require(`../assets/images/32.Back blows & Abdominal.jpg`)}
					/>
					<Image
						style={{ width: "100%", height: 180, marginTop: 20 }}
						source={require(`../assets/images/33..Back blows & Abdominal.jpg`)}
					/>
				</View>

				<View style={{ marginTop: 25, gap: 8 }}>
					<Text
						style={{
							fontSize: 18,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						Respiratory Arrest
					</Text>

					<Text
						style={{
							fontSize: 18,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						Respiratory Arrest is a type of breathing emergency which occurs
						when breathing has stopped.
					</Text>
				</View>

				<View style={{ gap: 8 }}>
					<Text style={{ fontSize: 20, fontFamily: "Poppins" }}>
						Rescue Breathing
					</Text>

					<Image
						style={{ width: "100%", height: 180, marginTop: 20 }}
						source={require(`../assets/images/34. Rescua Breathing.jpg`)}
					/>

					<Text
						style={{
							fontSize: 18,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						a technique of breathing air into a person to supply him or her with
						the oxygen needed to survive. Rescue breathing is given to a victim
						who are not breathing or with inadequate breathing but still have
						pulse.
					</Text>
				</View>

				<View style={{ marginTop: 25, gap: 8 }}>
					<Text
						style={{
							fontSize: 18,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						Asthma Attack
					</Text>

					<Text
						style={{
							fontSize: 18,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						Asthma is an illness in which certain substances or conditions
						called "triggers" cause infamenation and constricition of the
						airways, making breathing difficcult
					</Text>

					<Image
						style={{ width: "100%", height: 180, marginTop: 20 }}
						source={require(`../assets//images/35.astma attack.jpg`)}
					/>
				</View>

				<View
					style={{
						width: "100%",
						borderWidth: 1,
						borderStyle: "solid",
						borderColor: "black",
						borderRadius: 5,
						marginTop: 20,
					}}
				>
					<View
						style={{ width: "100%", backgroundColor: "#7E0303", padding: 12 }}
					>
						<Text
							style={{
								fontSize: 18,
								fontFamily: "Poppins",
								textAlign: "center",
								color: "white",
							}}
						>
							Signs and Symptoms
						</Text>
					</View>

					<View style={{ marginTop: 15, gap: 10, padding: 10 }}>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Hoarse whistling sound during exhalation (wheezing)
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Trouble breathing or shortness of breath
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Rapid shallow breathing
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Sweating
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Tightness in the chest
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Inability to talk without stopping for a breath
						</Text>
					</View>
				</View>

				<View style={{ gap: 8, marginTop: 15 }}>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>
						First Aid Management
					</Text>

					<View style={{ gap: 8 }}>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Remain Calm
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Help the person to sit comfortably
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Loosen any tight clothing around the neck and abdomen
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Assist the person with his or her prescribed quick relief
							medication under the following conditions
						</Text>

						<View style={{ gap: 7, paddingLeft: 10 }}>
							<Text
								style={{
									fontSize: 18,
									textAlign: "justify",
									fontFamily: "Poppins",
								}}
							>
								1. The Victim states that he or she is having an asthma attack
								and has medications (e.g a prescribed bronchodilator) or
								inhaler.
							</Text>
							<Text
								style={{
									fontSize: 18,
									textAlign: "justify",
									fontFamily: "Poppins",
								}}
							>
								2. The Victim identifies the medication and is unable to
								administer it without assistance
							</Text>
						</View>
					</View>
				</View>

				<View style={{ marginTop: 25, gap: 8 }}>
					<Text
						style={{
							fontSize: 18,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						Hyperventilation
					</Text>

					<Text
						style={{
							fontSize: 18,
							textAlign: "justify",
							fontFamily: "Poppins",
						}}
					>
						Hyperventilation occurs when a person's breathing is faster and more
						shallow than normal. When this happen, the body does not take in
						enough oxygen to meet its demands
					</Text>

					<Image
						style={{ width: "100%", height: 180, marginTop: 20 }}
						source={require(`../assets/images/35.hyperventation.jpg`)}
					/>
				</View>

				<View style={{ gap: 8, marginTop: 15 }}>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>
						First Aid Management
					</Text>

					<View style={{ gap: 8 }}>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Help the person rest in comfortable position
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- If the person is concious, check for other conditions
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Try to reassure the person to reduce their anxiety
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- If bystanders are present ask them what they know about the
							person's condition
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Tell the person to relax and breathe slowly
						</Text>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							- Seek medical help immediately
						</Text>
					</View>
				</View>

				<View
					style={{
						width: "100%",
						borderWidth: 1,
						borderStyle: "solid",
						borderColor: "black",
						borderRadius: 5,
						marginTop: 20,
					}}
				>
					<View
						style={{ width: "100%", backgroundColor: "#7E0303", padding: 12 }}
					>
						<Text
							style={{
								fontSize: 18,
								fontFamily: "Poppins",
								textAlign: "center",
								color: "white",
							}}
						>
							Signs and Symptoms
						</Text>
					</View>

					<View style={{ marginTop: 15, gap: 10, padding: 10 }}>
						<Text
							style={{
								fontSize: 18,
								textAlign: "justify",
								fontFamily: "Poppins",
							}}
						>
							People who are hyperventilating feel as if they cannot ger enough
							air. Often they are afraid and anxious or seem confused. They may
							say that they feel dizzy or that their fingers and toes feel numb
							or tingly
						</Text>
					</View>
				</View>
			</View>

			<View>
				<TouchableOpacity
					onPress={() => {
						router.push("/moduleQuizContainer/[id]");
						router.setParams({ moduleId: moduleId.toString() });
					}}
					style={{
						width: "100%",
						height: 50,
						backgroundColor: "red",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 3,
						marginTop: 30,
					}}
				>
					<Text style={{ color: "white", fontSize: 20, fontFamily: "Poppins" }}>
						TAKE THE QUIZ
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Module4;
