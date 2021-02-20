from rest_framework import serializers

class CandidateSerializer(serializers.Serializer):
    phone = serializers.CharField(max_length=15)
    name = serializers.CharField(max_length=50)
    gender = serializers.CharField(max_length=1)
    email = serializers.CharField(max_length=50)
    dob = serializers.DateField()
    occupation = serializers.CharField(max_length=15)
    married = serializers.CharField(max_length=1)
    connected = serializers.CharField(max_length=1)
    country = serializers.CharField(max_length=20)
    city = serializers.CharField(max_length=20)
    source = serializers.CharField(max_length=20)
    info = serializers.CharField(max_length=1000)
    password = serializers.CharField(max_length=15)
    status = serializers.CharField(max_length=10)
    level = serializers.PrimaryKeyRelatedField(read_only=True)
