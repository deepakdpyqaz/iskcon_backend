from rest_framework import serializers


class LectureSerializer(serializers.Serializer):
    level=serializers.PrimaryKeyRelatedField(read_only=True)
    title=serializers.CharField(max_length=20)
    video=serializers.CharField(max_length=100)
    sequence=serializers.IntegerField()