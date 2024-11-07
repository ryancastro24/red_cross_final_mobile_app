import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { RadioButton } from "react-native-paper";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
type EvaluationPropType = {
	name: string;
	field: string;
	id: string;
};

type RateDataProptyp = {
	rate1: number;
	rate2: number;
	rate3: number;
	rate4: number;
	rate5: number;
};

type UserDataPropType = {
	name: string;
	profilePictureUrl: string;
	_id: string;
};

const EvaluationForm = () => {
	const [rateData, setRateData] = useState({} as RateDataProptyp);
	const [isRated, setIsRated] = useState(false);
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState({} as UserDataPropType);
	const [ratingData, setRatingData] = useState(null);
	const [rating, setRating] = useState({
		rate1: "",
		rate2: "",
		rate3: "",
		rate4: "",
		rate5: "",
	});

	const { name, field, id } = useLocalSearchParams() as EvaluationPropType;
	const userId = userData._id;

	async function getData() {
		try {
			const token = await AsyncStorage.getItem("token");

			const response = await fetch(
				"https://red-cross-api-final.onrender.com/api/user/userData",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ token: token }),
				}
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();

			const finalUserData = data.data;
			console.log(finalUserData);
			setUserData(finalUserData);
		} catch (error) {
			console.error("Error:", error);
		}
	}

	const ratingLabel = (rate: number) => {
		switch (rate) {
			case 1:
				{
					return "#FF0000";
				}
				break;
			case 2:
				{
					return "#56423d";
				}
				break;
			case 3:
				{
					return "#bea6a0";
				}
				break;
			case 4:
				{
					return "#009700";
				}
				break;
			case 5:
				{
					return "#006100";
				}
				break;
		}
	};

	const handleRateInstructor = async () => {
		try {
			console.log({ ...rating, userId: userId, instructoId: id });

			const response = await fetch(
				"https://red-cross-api-final.onrender.com/api/ratings",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ ...rating, userId: userId, instructorId: id }),
				}
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();

			setRatingData(data);
			setLoading(false);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	// validated instuctor if rated by user
	async function getInstructorRatings() {
		try {
			console.log({ userId: userId, instructoId: id });
			const response = await fetch(
				`https://red-cross-api-final.onrender.com/api/ratings?userId=${userId}&instructorId=${id}`
			);

			const data = await response.json();
			if (response.ok) {
				console.log(data);
				setRateData(data);
				setIsRated(true);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}

	useFocusEffect(
		useCallback(() => {
			getInstructorRatings();
		}, [userData, ratingData])
	);

	const getProgressValue = (rating: number): number => {
		return 0.05 + (rating - 1) * 0.225;
	};

	useFocusEffect(
		useCallback(() => {
			getData();
		}, [])
	);

	return (
		<ScrollView>
			<Stack.Screen options={{ title: "Evaluate Trainer" }} />
			<View>
				<View style={styles.detailsContainer}>
					<View
						style={{
							width: 80,
							height: 80,
							borderRadius: 120,
							backgroundColor: "#F1EFEF",
						}}
					></View>
					<View style={{ gap: 1 }}>
						<Text style={styles.cardName}>{name}</Text>
						<Text style={{ fontSize: 18 }}>{field}</Text>
					</View>
				</View>

				{isRated ? (
					<View
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							padding: 30,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								marginTop: 30,
								alignItems: "center",
								justifyContent: "space-evenly",
							}}
						>
							<View style={{ alignItems: "center", gap: 2 }}>
								<View
									style={{
										width: 20,
										height: 20,
										backgroundColor: "#ff0000",
										borderRadius: 3,
									}}
								></View>
								<Text>WORST</Text>
							</View>

							<View style={{ alignItems: "center", gap: 2 }}>
								<View
									style={{
										width: 20,
										height: 20,
										backgroundColor: "#56423d",
										borderRadius: 3,
									}}
								></View>
								<Text>BAD</Text>
							</View>

							<View style={{ alignItems: "center", gap: 2 }}>
								<View
									style={{
										width: 20,
										height: 20,
										backgroundColor: "#bea6a0",
										borderRadius: 3,
									}}
								></View>
								<Text>NEUTRAL</Text>
							</View>

							<View style={{ alignItems: "center", gap: 2 }}>
								<View
									style={{
										width: 20,
										height: 20,
										backgroundColor: "#009700",
										borderRadius: 3,
									}}
								></View>
								<Text>GOOD</Text>
							</View>

							<View style={{ alignItems: "center", gap: 2 }}>
								<View
									style={{
										width: 20,
										height: 20,
										backgroundColor: "#006100",
										borderRadius: 3,
									}}
								></View>
								<Text>EXCELLENT</Text>
							</View>
						</View>

						<View style={{ gap: 20, width: "100%", marginTop: 30 }}>
							<View style={{ width: "100%", gap: 5 }}>
								<Text style={{ fontSize: 18 }}>
									How would you rate the trainer's ability to explain the course
									material?
								</Text>
								<ProgressBar
									style={{ height: 10, borderRadius: 2 }}
									progress={getProgressValue(rateData?.rate1)}
									color={ratingLabel(rateData?.rate1)}
								/>
							</View>

							<View style={{ width: "100%", gap: 5 }}>
								<Text style={{ fontSize: 18 }}>
									How engaging and interactive was the learning environment
									created by the trainer?
								</Text>
								<ProgressBar
									style={{ height: 10, borderRadius: 2 }}
									progress={getProgressValue(rateData?.rate2)}
									color={ratingLabel(rateData?.rate2)}
								/>
							</View>

							<View style={{ width: "100%", gap: 5 }}>
								<Text style={{ fontSize: 18 }}>
									How effectively did the trainer handle questions and provide
									feedback during the training session?
								</Text>
								<ProgressBar
									style={{ height: 10, borderRadius: 2 }}
									progress={getProgressValue(rateData?.rate3)}
									color={ratingLabel(rateData?.rate3)}
								/>
							</View>

							<View style={{ width: "100%", gap: 5 }}>
								<Text style={{ fontSize: 18 }}>
									How knowledgeable and confident was the trainer in delivering
									the subject matter?
								</Text>
								<ProgressBar
									style={{ height: 10, borderRadius: 2 }}
									progress={getProgressValue(rateData?.rate4)}
									color={ratingLabel(rateData?.rate4)}
								/>
							</View>

							<View style={{ width: "100%", gap: 5 }}>
								<Text style={{ fontSize: 18 }}>
									How well did the trainer adhere to the course objectives and
									training schedule?
								</Text>
								<ProgressBar
									style={{ height: 10, borderRadius: 2 }}
									progress={getProgressValue(rateData?.rate5)}
									color={ratingLabel(rateData?.rate5)}
								/>
							</View>
						</View>
					</View>
				) : (
					<>
						<View style={{ padding: 20 }}>
							<View>
								<Text style={{ fontSize: 18, textAlign: "justify" }}>
									How would you rate the trainer's ability to explain the course
									material?
								</Text>

								<View>
									<RadioButton.Group
										onValueChange={(newValue) =>
											setRating({ ...rating, rate1: newValue })
										}
										value={rating.rate1}
									>
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "space-evenly",
												marginTop: 20,
											}}
										>
											<View>
												<Text>Worst</Text>
												<RadioButton value="1" />
											</View>
											<View>
												<Text>Bad</Text>
												<RadioButton value="2" />
											</View>
											<View>
												<Text>Neutral</Text>
												<RadioButton value="3" />
											</View>

											<View>
												<Text>Good</Text>
												<RadioButton value="4" />
											</View>

											<View>
												<Text>Excellent</Text>
												<RadioButton value="5" />
											</View>
										</View>
									</RadioButton.Group>
								</View>
							</View>
						</View>

						{/* rate conatainer ends here */}

						<View style={{ padding: 20 }}>
							<View>
								<Text style={{ fontSize: 18, textAlign: "justify" }}>
									How engaging and interactive was the learning environment
									created by the trainer?
								</Text>

								<View>
									<RadioButton.Group
										onValueChange={(newValue) =>
											setRating({ ...rating, rate2: newValue })
										}
										value={rating.rate2}
									>
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "space-evenly",
												marginTop: 20,
											}}
										>
											<View>
												<Text>Worst</Text>
												<RadioButton value="1" />
											</View>
											<View>
												<Text>Bad</Text>
												<RadioButton value="2" />
											</View>
											<View>
												<Text>Neutral</Text>
												<RadioButton value="3" />
											</View>

											<View>
												<Text>Good</Text>
												<RadioButton value="4" />
											</View>

											<View>
												<Text>Excellent</Text>
												<RadioButton value="5" />
											</View>
										</View>
									</RadioButton.Group>
								</View>
							</View>
						</View>

						{/* rate conatainer ends here */}

						<View style={{ padding: 20 }}>
							<View>
								<Text style={{ fontSize: 18, textAlign: "justify" }}>
									How effectively did the trainer handle questions and provide
									feedback during the training session?
								</Text>

								<View>
									<RadioButton.Group
										onValueChange={(newValue) =>
											setRating({ ...rating, rate3: newValue })
										}
										value={rating.rate3}
									>
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "space-evenly",
												marginTop: 20,
											}}
										>
											<View>
												<Text>Worst</Text>
												<RadioButton value="1" />
											</View>
											<View>
												<Text>Bad</Text>
												<RadioButton value="2" />
											</View>
											<View>
												<Text>Neutral</Text>
												<RadioButton value="3" />
											</View>

											<View>
												<Text>Good</Text>
												<RadioButton value="4" />
											</View>

											<View>
												<Text>Excellent</Text>
												<RadioButton value="5" />
											</View>
										</View>
									</RadioButton.Group>
								</View>
							</View>
						</View>

						{/* rate conatainer ends here */}

						<View style={{ padding: 20 }}>
							<View>
								<Text style={{ fontSize: 18, textAlign: "justify" }}>
									How knowledgeable and confident was the trainer in delivering
									the subject matter?
								</Text>

								<View>
									<RadioButton.Group
										onValueChange={(newValue) =>
											setRating({ ...rating, rate4: newValue })
										}
										value={rating.rate4}
									>
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "space-evenly",
												marginTop: 20,
											}}
										>
											<View>
												<Text>Worst</Text>
												<RadioButton value="1" />
											</View>
											<View>
												<Text>Bad</Text>
												<RadioButton value="2" />
											</View>
											<View>
												<Text>Neutral</Text>
												<RadioButton value="3" />
											</View>

											<View>
												<Text>Good</Text>
												<RadioButton value="4" />
											</View>

											<View>
												<Text>Excellent</Text>
												<RadioButton value="5" />
											</View>
										</View>
									</RadioButton.Group>
								</View>
							</View>
						</View>

						{/* rate conatainer ends here */}

						<View style={{ padding: 20 }}>
							<View>
								<Text style={{ fontSize: 18, textAlign: "justify" }}>
									How well did the trainer adhere to the course objectives and
									training schedule?
								</Text>

								<View>
									<RadioButton.Group
										onValueChange={(newValue) =>
											setRating({ ...rating, rate5: newValue })
										}
										value={rating.rate5}
									>
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "space-evenly",
												marginTop: 20,
											}}
										>
											<View>
												<Text>Worst</Text>
												<RadioButton value="1" />
											</View>
											<View>
												<Text>Bad</Text>
												<RadioButton value="2" />
											</View>
											<View>
												<Text>Neutral</Text>
												<RadioButton value="3" />
											</View>

											<View>
												<Text>Good</Text>
												<RadioButton value="4" />
											</View>

											<View>
												<Text>Excellent</Text>
												<RadioButton value="5" />
											</View>
										</View>
									</RadioButton.Group>
								</View>
							</View>
						</View>

						{/* rate conatainer ends here */}

						<TouchableOpacity
							onPress={() => {
								handleRateInstructor();
								setLoading(true);
							}}
							style={styles.ratingBtn}
						>
							<Text
								style={{ fontSize: 22, fontWeight: "bold", color: "white" }}
							>
								{loading ? "LOADING" : "RATE INSTRUCTOR"}
							</Text>
						</TouchableOpacity>
					</>
				)}
			</View>
		</ScrollView>
	);
};

export default EvaluationForm;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		paddingVertical: 50,
		paddingHorizontal: 20,
	},

	header: {
		fontSize: 25,
	},
	detailsContainer: {
		width: "100%",
		backgroundColor: "white",
		flexDirection: "row",
		padding: 20,
		alignItems: "center",
		gap: 10,
	},
	cardName: {
		fontSize: 35,
		fontWeight: "900",
		color: "#444242",
	},
	ratingBtn: {
		marginTop: 20,
		width: "100%",
		height: 65,
		backgroundColor: "#7B0000",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		color: "white",
		borderTopWidth: 1, // Top border width
		borderBottomWidth: 1, // Bottom border width
		borderTopColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white top border
		borderBottomColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white bottom border
		borderLeftWidth: 0, // No left border
		borderRightWidth: 0, // No right border
	},
});
